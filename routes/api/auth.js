const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//user model
//const User = require('../../models/User'); PROBLEM IS HERE

//@route    GET api/auth
//@desc     Test route
//@access   Public
router.get('/', auth, async (req, res) => {
  res.send('auth route');
  //   try {
  //     const user = await User.findById(req.user.id).select('-password');
  //     res.json(user);
  //   } catch (err) {
  //     console.error(err.message);
  //     res.status(500).send('Server error!');
  //   }
});

module.exports = router;
