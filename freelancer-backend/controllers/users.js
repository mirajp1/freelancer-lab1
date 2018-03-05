const User = require('../models').User;
const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = {
    create(req, res) {
        console.log(req.body);

        return User
            .create({
                email: req.body.email,
                password:req.body.password,
                userType:req.body.userType
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
    },
    validateUser(req,res){

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

                            res.json({ success: true, token: 'JWT ' + token });
                        }
                        else{
                            res.status(404).send({error:"Password Incorrect!"});
                        }
                    })
                    .catch(error=>{
                        console.log(error);
                        res.status(400).send(error)
                    });
            })
            .catch(error=> res.status(400).send(error));


    }
};