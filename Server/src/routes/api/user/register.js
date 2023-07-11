const User = require('../models/User');

module.exports = async (req, res) => {
    try {
        const { name, email, password, picture } = req.body;
        console.log(req.body);
        const user = await User.create({ name, email, password, picture });
        res.status(201).json(user);
    } catch (e) {
        let msg;
        if (e.code == 11000) {
            msg = "User already exists"
        } else {
            msg = e.message;
        }
        console.log(e);
        res.status(400).json(msg)
    }
}