const jwt = require('jsonwebtoken');
const { TokenExpiredError } = jwt;

// it is middleware which guard our protect routes from entering in case of not logging 
module.exports = function(req,res,next)
{
    const token = req.header('auth-token');
    if(!token) return res.status(403).send('Access Denied! no token provided!');

    try{
        //verified variable contain payload of jwt in our case _id of user
        // thanks to this middleware we can easily use in our routes queires which need user _id to search in db
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        console.log("Verify token: ");
        console.log(verified);
        next();
    }
    catch(err){
        if(err instanceof TokenExpiredError) res.status(401).send({ message: "Unathorized! Access token was expired!" });

        res.status(400).send('Invalid Token!');
    }
}