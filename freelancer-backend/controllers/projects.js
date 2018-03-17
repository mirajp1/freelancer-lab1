const Project = require('../models').Project;
const User = require('../models').User;
const Skill = require('../models').Skill;
const Bid = require('../models').Bid;
const Profile = require('../models').Profile;
const sequelize =require( "sequelize");

module.exports = {
    retrieve(req, res) {
        console.log(req.params);
        console.log(req.user.id);

        return Project
            .findOne({
                where:{id:req.params.id},
                include:[User,Skill,{
                    model: Bid,

                    include:[{all:true},{
                        model:User,
                        include:[Profile],

                    }]
                }],
            } )
            .then(project => {
                // console.log(project);
                res.status(201).send(project)
            })
            .catch(error => {
                console.log(error);
                res.status(400).send(error)
            });
    },
    create(req, res) {
        console.log(req.body);

        return Project
            .create({
                name: req.body.name,
                description:req.body.description,
                budget_range:req.body.budget_range,

            })
            .then(project => {
                project.setSkills(req.body.skills)
                    .then(skill=>{
                        project.setUser(req.user.id)
                            .then((user)=>{
                                res.status(201).send(project)
                            })
                            .catch(error => res.status(400).send(error))
                    })
                .catch(error => res.status(400).send(error))

            })
            .catch(error => res.status(400).send(error));
    },
    retrieveAll(req, res) {
        console.log(req.params);
        console.log(req.user.id);

        return Project
            .findAll({
                include:[{
                    model:User,
                    include:[{all:true},
                        {model:Profile}
                    ]
                },Skill,{
                    model: Bid,

                    include:[{all:true},{
                        model:User,
                        include:[Profile],

                    }]
                }],
            } )
            .then(project => {
                // console.log(project);
                res.status(201).send(project)
            })
            .catch(error => {
                console.log(error);
                res.status(400).send(error)
            });
    },
    retrieveAllBidded(req, res) {
        console.log(req.params);
        console.log(req.user.id);

        return Project
            .findAll({
                include:[{
                    model:User,
                    include:[
                        {model:Profile}
                    ]
                },Skill,{
                    model: Bid,
                    where:{UserId:req.user.id},

                    include:[{all:true},{
                        model:User,
                        include:[Profile],

                    }]
                }],
            } )
            .then(project => {
                // console.log(project);
                res.status(201).send(project)
            })
            .catch(error => {
                console.log(error);
                res.status(400).send(error)
            });
    },
    retrieveAllCreated(req, res) {
        console.log(req.user.id);

        return Project
            .findAll({
                where:{UserId:req.user.id},
                include:[{
                    model:User,
                    include:[
                        {model:Profile}
                    ]
                },Skill,{
                    model: Bid,
                    include:[{all:true},{
                        model:User,
                        include:[Profile],

                    }]
                }],
            } )
            .then(project => {
                // console.log(project);
                res.status(201).send(project)
            })
            .catch(error => {
                console.log(error);
                res.status(400).send(error)
            });
    },
};
