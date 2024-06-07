const { User } = require('../../../model');

module.exports = async (req, res) => {
  try {

    console.log(req)

    const page = 1;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || ""; // searches username or by name

    const users = await User.find({username: {$regex: search, $options: "i"}}) // options "i" means ignore case sensitive
      // currently no way to search by first and last name
      .skip(page * limit)
      .limit(limit);

    const response = {
        eror: false,
        page: page+1,
        limit,
        users
    }
    
    
    res.status(200).json(response); // No content to send back
  } catch (e) {
    res
      .status(e.message === 'User not found' ? 404 : 400)
      .json({ message: e.message });
  }
};
