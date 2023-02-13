const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../model/user');

router.get('/', verify, async (req,res) => 
{
    user = await User.findOne({_id: req.user});
    res.json({posts: {title: 'my first post', description: 'random data you should not access while not logged in!', loggedUser: user}});
});

module.exports = router;