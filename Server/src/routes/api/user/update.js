const { User } = require("../../../model");

module.exports = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      throw new Error("User not found");
    }
    res.status(200).json(user);
  } catch (e) {
    res
      .status(e.message === "User not found" ? 404 : 400)
      .json({ message: e.message });
  }
};
