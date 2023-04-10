const menuModel = require("./../models/item");
const { v4: uuidv4 } = require('uuid')

const postItem = async (req, res) => {
    try {
        const itemExist = await menuModel.findOne({ name: req.body.name });
        if (itemExist) {

            res.status(200).json({message:"item exist"});
            return;
        }
        const item = new menuModel({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            image: req.body.image,
            price: req.body.price,
            uuid: uuidv4()
        })
        await item.save();
        return res.status(200).json({ message: 'Items created.!' })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const getMenu = async (req, res) => {
    try {
        const getMenu = await menuModel.find({})
        res.status(200).send(getMenu)
    } catch (error) {
        res.status(500).json({ message: error.messsge })
    }
}
const deleteMenuItem = async (req, res) => {
    try {
        const deleteMenuItem = await menuModel.findOne({ uuid: req.body.itemUuid }).lean();
        if (!deleteMenuItem) return res.status(200).json({ message: 'itemModel Not Found'});

        await menuModel.findOneAndDelete({ uuid: req.body.itemUuid })
        res.status(200).json({message: ' Deleted Successfully'  }
        );
      }
      catch (error) {
        return res.status(400).json({ message: error.message });
      }
    }
module.exports = { postItem, getMenu,deleteMenuItem };