const User = require("../model/mongo/Schemas/User");

const updateUser = async (userId, updateData) => {
  const user = await User.findByIdAndUpdate(userId, updateData, {
    new: true,
    runValidators: true,
  });
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

const deleteUser = async (userId) => {
  const user = await User.findByIdAndDelete(userId);
  if (!user) {
    throw new Error("User not found");
  }
};

module.exports = {
  updateUser,
  deleteUser,
};
