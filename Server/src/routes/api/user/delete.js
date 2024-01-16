const { User } = require("../../../model");

module.exports = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      throw new Error("User not found");
    }
    res.status(204).send(); // No content to send back
  } catch (e) {
    res
      .status(e.message === "User not found" ? 404 : 400)
      .json({ message: e.message });
  }
};
