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
    },
    uploadProfilePhoto(req,res){
        console.log(req.body);

        console.log(req.file);

        if(req.file){
            return Profile
                .findOne({
                    where:{userId:req.user.id},
                    include:[{
                        model:User,
                        as:'puser'
                    }]
                } )
                .then(profile => {
                    console.log(profile);

                    if(profile){
                        profile.update({image:"/uploads/profile/"+req.file.filename})
                            .then((profile)=>{
                                res.status(201).send(profile)
                            })
                    }
                    else {
                        res.status(400).send({error:"profile not found!"});

                    }
                })
                .catch(error => {
                    console.log(error);
                    res.status(400).send(error)
                });
        }

    }
};
