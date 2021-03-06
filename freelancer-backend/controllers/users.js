const User = require('../models').User;
const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = {
    create(req, res) {
        console.log(req.body);

        if(req.body.email===""){
            res.status(400).send({error:"Cannot have empty email"});
        }
        else if(req.body.password===""){
            res.status(400).send({error:"Cannot have empty password"});
        }
        else if(req.body.password && req.body.password.length < 8){
            res.status(400).send({error:"Password length must be atleast 8!"});
        }
        else if(req.body.userType && req.body.userType.length ===0){
            res.status(400).send({error:"User type is required!"});
        }
        else {
            return User
                .create({
                    email: req.body.email,
                    password: req.body.password,
                    userType: req.body.userType
                })
                .then(user => res.status(201).send(user))
                .catch(error => res.status(400).send(error));
        }
    },
    validateUser(req,res){

        // console.log(req.body);

        User.findOne({where: { email: req.body.email } })
            .then((user)=>{
                // console.log(user);
                user.validPassword(req.body.password)
                    .then((result)=>{
                        // console.log("bcrypt"+result);
                        if(result===true){
                            var token = jwt.sign(
                                { id: user.id },
                                config.keys.secret,
                                { expiresIn: '1d' }
                            );

                            res.json({ success: true, token: 'JWT ' + token ,user:user});
                        }
                        else{
                            res.status(400).send({error:"Password Incorrect!"});
                        }
                    })
                    .catch(error=>{
                        console.log(error);
                        res.status(400).send(error)
                    });
            })
            .catch(error=> res.status(400).send({"error":"user not found"}));


    }
};