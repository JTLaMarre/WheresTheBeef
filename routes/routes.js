const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// oos model
const oosSchema = require('../models/oos');

// create oos
router.route('/create_oos').post((req,res,next)=>{
    oosSchema.create(req.body, (error,data)=>{
        if(error){
            return next(error)
        } else{
            console.log(data)
            res.json(data)
        }
    })
});

// read all oos
router.route('/').get((req,res)=>{
    oosSchema.find((error,data)=>{
        if(error){
            return next(error)
        }else {
            res.json(data)
        }
    })
});

// get a single oos
router.route('/oos:id').get((req,res)=>{
    oosSchema.findById(req.params.id, (error, data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
});

// update oos
router.route('/oos:id').put((req,res,next)=>{
    oosSchema.findByIdAndUpdate(req.params.id,{
$set:req.body
},(error,data)=>{
    if(error){
        return next(error);
        console.log(error)
    } else {
        res.json(data)
        console.log('oos updated successfully')
    }
})
})

// delete oos
router.route('/delete_oos/:id').delete((req,res,next)=>{
    oosSchema.findOneAndRemove(req.params.id,(error,data)=>{
        if(error){
            return next(error);
        }else{
            res.status(200).json({
                msg:data
            })
        }
    })
})

module.exports =router;
