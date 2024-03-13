const User = require('../model/mongo/Schemas/User')

const updateUser = async (userId, updateData) => {
    try {
      console.log('updateData.email:', updateData.email); // Check if email is present in updateData
  
      const user = await User.findByIdAndUpdate(userId, updateData, {
        new: true,
        runValidators: true,
      });
  
      if (!user) {
        throw new Error('User not found');
      }
  
      return user;
    } catch (error) {
      throw error;
    }
  };
  

const deleteUser = async (userId) => {
    try{
        const user = await User.findByIdAndDelete(userId);
        if(!user) {
            throw new Error ('user not found');
        }
    } catch (error){
        throw error;
    }
}; 

module.exports = {
    updateUser,
    deleteUser
}