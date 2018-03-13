const Profile = require('../models').Profile;
const User = require('../models').User;

module.exports = {
    retrieve(req, res) {
        console.log(req.params);

        return Profile
            .findOne({
                where:{userId:req.params.id},
                include:[{
                    model:User,
                    as:'puser'
                }]
            } )
            .then(profile => {
                console.log(profile);
                res.status(201).send(profile)
            })
            .catch(error => {
                console.log(error);
                res.status(400).send(error)
            });
    }
};
