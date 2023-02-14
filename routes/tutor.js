const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../model/user');
const user = require('../model/user');

router.get('/', verify, async (req,res) => 
{
    console.log("Tutor site access");
    const user = await User.findOne({_id: req.user.userId});
    // console.log(user);
    res.send({posts: {title: 'my first post', description: 'random data you should not access while not logged in!', loggedUser: user._id}});
});

module.exports = router;