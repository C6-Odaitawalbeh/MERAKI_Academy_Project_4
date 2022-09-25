const roleModel = require('../models/role');

const createRole = (erq,res) => {
    const { role,permissions } = req.body;
    
    const newRole = new roleModel(
        {
            role,
            permissions
        }
    )

    newRole.save()
    .then((result)=>{
        res.status(201);
        res.status(result);
    })
    .catch((err)=>{
        res.status(500);
        res.send(err.message);
    });
};

module.exports = { createRole };