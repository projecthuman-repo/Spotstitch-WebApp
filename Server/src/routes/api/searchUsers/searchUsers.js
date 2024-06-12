const { User } = require('../../../model');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

// module.exports = async (req, res) => {
//   try {

//     console.log(req)

//     const page = 1;
//     const limit = parseInt(req.query.limit) || 5;
//     const search = req.query.search || ""; // searches username or by name

//     const users = await User.find({username: {$regex: search, $options: "i"}}) // options "i" means ignore case sensitive
//       // currently no way to search by first and last name
//       .skip(page * limit)
//       .limit(limit);

//     const response = {
//         eror: false,
//         page: page+1,
//         limit,
//         users
//     }
    
    
//     res.status(200).json(response); // No content to send back
//   } catch (e) {
//     res
//       .status(e.message === 'User not found' ? 404 : 400)
//       .json({ message: e.message });
//   }
// };


module.exports = async (req, res) => {
  try {

    const query = req.body.username
    const user = await User.findOne({username: query})

    logger.info({ username: query }, "searching for user")
        if (!user) throw new Error("User does not exist")
        console.log(user);
        // update user firstName
        const data = await user.getUserData()

        // return updated firstName back to user
        res.status(200).json(createSuccessResponse( data ));


  } catch (e) {
    logger.error({ error: error.message }, 'Error finding user')
    res.status(400).json(createErrorResponse(400, 'Error finding user'))
  }
 }