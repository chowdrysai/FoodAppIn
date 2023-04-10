const { v4: uuidv4 } = require('uuid')
const orderModel = require("./../models/order");
const menuModel = require("./../models/item");
const postOrders = async (req, res) => {
    try {
        const user = req.user;
        const orders = req.body;
        if (orders.length <= 0) return res.status(500).json({ message: 'Orders not found' })
        const itemUuids = [];
        orders.forEach(item => {
            itemUuids.push(item.itemUuid);
            item.userUuid = user.userUuid;
            item.total_item = item.quantity
            item.uuid = uuidv4();
        });
        const itemsResult = await menuModel.find({ uuid: itemUuids }).lean();

        if (itemsResult.length !== itemUuids.length) return res.status(500).json({ message: 'Invalid Item(s) provided' })

        orders.forEach(item => {
            itemsResult.forEach(item1 => {
                if (item.itemUuid === item1.uuid) {
                    item.item_price = item1.price
                    item.total_price = item.quantity * item1.price
                }
            })
        })
        await orderModel.insertMany(orders);
        res.status(200).json({ message: "Order placed" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getOrders = async (req, res) => {
    try {
        const user = req.user;
        const status = req.params.status === 'all' ? false : req.params.status;
        const query = {
            ...(status && ({ status })),
            ...(user.role !== "admin" && ({ userUuid: user.userUuid }))
        }
        // const query = {};
        // if (user.role !== "admin") query["userUuid"] = user.userUuid
        // if (!status) query["status"] = status
        const orders = await orderModel.find(query);
        res.status(200).json({ orders });
        } catch (error) {
        res.status(500).json({ error: error.messsge })
    }};

const orderStatus = async (req, res) => {
    try {
        const { body } = req;
        const filter = {
            uuid: body.uuid
        };
        // if (body.orderUuid.length === 1 && body.orderUuid[0] === "all") filter['status'] = 'inProgress';
        // else filter['uuid'] = { $in: req.body.orderUuid };
        // console.log(filter)

        await orderModel.updateMany(filter, { "$set": { "status": req.params.status } })
        res.status(200).json({ message: "status changed" });
    } catch (error) {
        res.status(500).json({ error: error.messsge })
    }
}

module.exports = { postOrders, getOrders, orderStatus };
