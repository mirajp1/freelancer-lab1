var express = require('express');
var router = express.Router();


router.post('/add',function(req,res,next){

    if(req.body.num1 && req.body.num2){
        var num1= parseInt(req.body.num1);
        var num2 = parseInt(req.body.num2);
        var answer = num1+num2;
        res.send({result:answer+'',error:false});
    }
    else{
        res.status(422);
        res.send({message:'Need two numbers!',error:true});
    }

});

router.post('/sub',function(req,res,next){

    if(req.body.num1 && req.body.num2){
        var num1= parseInt(req.body.num1);
        var num2 = parseInt(req.body.num2);
        var answer = num1-num2;
        res.send({result:answer+'',error:false});
    }
    else{
        res.status(422);
        res.send({message:'Need two numbers!',error:true});
    }

});

router.post('/mul',function(req,res,next){

    if(req.body.num1 && req.body.num2){
        var num1= parseInt(req.body.num1);
        var num2 = parseInt(req.body.num2);
        var answer = num1*num2;
        res.send({result:answer+'',error:false});
    }
    else{
        res.status(422);
        res.send({message:'Need two numbers!',error:true});
    }

});

router.post('/div',function(req,res,next){

    if(req.body.num1 && req.body.num2){
        var num1= parseInt(req.body.num1);
        var num2 = parseInt(req.body.num2);
        var answer = num1/num2;
        res.send({result:answer+'',error:false});
    }
    else{
        res.status(422);
        res.send({message:'Need two numbers!',error:true});
    }

});

module.exports = router;
