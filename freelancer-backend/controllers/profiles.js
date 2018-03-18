const Profile = require('../models').Profile;
const User = require('../models').User;
const Skill = require('../models').Skill;

module.exports = {
    retrieve(req, res) {
        console.log(req.params);

        return Profile
            .findOne({
                where:{userId:req.params.id},
                include:[{
                    model:User,
                    as:'puser',
                    include:[Skill]
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
    update(req,res){
        console.log(req.body);

        console.log(req.file);

        var filePath="";
        if(req.file) {
            var filePath="/uploads/profile/"+req.file.filename;
        }
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
                    profile.update({
                        image:filePath==="" ? profile.image : filePath,
                        name:req.body.name,
                        about:req.body.about,
                        email:req.body.email
                    })
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

