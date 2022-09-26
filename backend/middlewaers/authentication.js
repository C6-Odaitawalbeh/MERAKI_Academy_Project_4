const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ").pop();
        const secretKey = process.env.SECRET;
        
        jwt.verify(token, secretKey, (err, result) => {
            if (err) {
                res.status(403);
                res.json({
                    success: false,
                    message: `The ${token} is invalid or expired`,
                });
            }
            req.token = result;
            next();
        });
    } catch (error) {
        res.status(403).json({ success: false, message: "Forbidden" });
    }
};

module.exports = authentication;
