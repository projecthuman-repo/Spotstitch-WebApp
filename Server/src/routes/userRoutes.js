const router = require("express").Router();
const User = require("../model/mongo/Schemas/User");
const login = require("./api/user/login");
const {updateUser, deleteUser} = require('../controllers/UserController')

// creating user
router.post("/", async (req, res) => {
  try {
    const { name, email, password, picture } = req.body;
    console.log(req.body);
    const user = await User.create({ name, email, password, picture });
    res.status(201).json(user);
  } catch (e) {
    let msg;
    if (e.code == 11000) {
      msg = "User already exists";
    } else {
      msg = e.message;
    }
    console.log(e);
    res.status(400).json(msg);
  }
});

// login user

router.post("/login", login);

// Update User 
router.put('/:id', async (req, res) =>{
  process.stdout.write('This should appear immediately\n');
  try{
    //Call the updateUser function from controller
    const user = await updateUser(req.params.id, req.body);
    res.json(user);
  } catch (e){
    // if updateUser throws out an error, catch it and send a response
    res.status(e.message === 'User not found' ? 404 : 400).json({ message : e.message});
  }

});

// Add the delete user route if it's not already present 
router.delete('/:id', async (req, res) =>{
  try{
    // Call the deleteUser function from controller 
    await deleteUser(req.params.id);
    res.status(204).send();
  } catch (e){
    res.status(e.message === 'User not found' ? 404 : 400).json({message: e.message});
  }
});

module.exports = router;