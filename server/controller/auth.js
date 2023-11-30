const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userModel = require('./../models/user');
const { v4: uuidv4 } = require('uuid');
const { TOKEN_SECRET } = require('./../config/config.json');


const register = async (req, res) => {
    try {
    //CHECKING IF USER EMAIL ALREADY EXISTS
        const emailExist = await userModel.findOne({ email: req.body.email });
        // IF EMAIL EXIST THEN RETURN
        if (emailExist) {
            res.status(400).send('user exist');
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = new userModel({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            role: req.body.role,
            uuid: uuidv4()
        });
        await user.save();
        res.status(200).json({ message: 'user created' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) return res.status(400).json({ message: 'Incorrect Email- ID' });
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send('Incorrect Password');

        const token = jwt.sign({ userUuid: user.uuid, email: user.email, role: user.role }, TOKEN_SECRET, { expiresIn: 86400 });
        return res.status(200).json({ token, email: user.email, name: user.name,role:user.role});

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};


const deleteuserModel = async (req, res) => {
    try {
        console.log(req.body);
        const userData = await userModel.findOne({ email: req.body.email }).lean();
        if (!userData) return res.status(200).send('userModel Not Found');

        await userModel.findOneAndDelete({ email: req.body.email });
        res.status(200).json({
            status: true,
            message: 'userModel Deleted Successfully'
        });
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
const updateUser = async (req, res) => {
    try {
        const uuid = req.user.uuid;
        const updateObj = req.body;
        await userModel.findByIdAndUpdate({ uuid }, updateObj);
        res.status(200).json({ message: 'update Successful' });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
module.exports = {
    login, register, deleteuserModel, updateUser
};
