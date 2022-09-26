const authorization = (string) => {
    return (req,res,next) => {
        const chekRole = req.token;
        if (chekRole.role.permissions.includes(string)) {
            // console.log(chekRole.role.permissions);
            next();
        } else {
            res.status(403);
            res.json({success: false, massage: "Unauthorized"});
        }
    };
};

module.exports = authorization;