const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { _id, name, email, address, phone } = req.body;
    const idExists = await User.findOne({ _id });
    const emailExists = await User.findOne({ email });
    if (idExists) {
      return res.json({
        mensage: "This ID was used, please insert other ID."
      });
    }
    if (emailExists) {
      return res.json({
        mensage: "This email was used, please insert other EMAIL."
      });
    }
    const user = await User.create({ _id, name, email, address, phone });
    return res.json(user);
  }
};
