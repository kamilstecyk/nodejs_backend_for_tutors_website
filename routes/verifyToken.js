const jwt = require('jsonwebtoken');

// it is middleware which guard our protect routes from entering in case of not logging 
module.exports = function(req,res,next)
{
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access Denied!');

    try{
        //verified variable contain payload of jwt in our case _id of user
        // thanks to this middleware we can easily use in our routes queires which need user _id to search in db
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }
    catch(err){
        res.status(400).send('Invalid Token!');
    }
}