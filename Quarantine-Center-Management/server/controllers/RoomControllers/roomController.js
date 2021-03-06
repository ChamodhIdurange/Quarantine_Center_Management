const express = require('express')
var router = express.Router()
var ObjectID= require('mongoose').Types.ObjectId
var multer = require('multer')
var uniqid = require('uniqid')

var { room } = require('../../models/RoomModels/room')
var { booking } = require('../../models/RoomModels/booking')
var { feedback } = require('../../models/RoomModels/feedback')

router.get('/',(req,res)=>{
    room.find((err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

router.get('/get_booking',(req,res)=>{
    booking.find((err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

router.get('/:id',(req,res)=>{
    
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(req.params.id)
    }

    room.findById(req.params.id,(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

router.post('/',(req,res)=>{
    var newRecord= new room({
        roomName: req.body.roomName,
        roomType: req.body.roomType,
        description: req.body.description,
        image: req.body.image,
        total: req.body.total,
    })

    newRecord.save((err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

router.post('/booking',(req,res)=>{
    var record= new booking({
        fname: req.body.fname,
        lname: req.body.lname,
        nic: req.body.nic,
        email: req.body.email,
        checkin: req.body.checkin,
        checkout: req.body.checkout,
        roomid: req.body.roomid,
        patientid: req.body.patientid,
        price: req.body.price
    })
    //backend Validation
    booking.findOne({email: req.body.email},(err,docs)=>{
        if(!docs){
            record.save((err,docs)=>{
                if(!err){
                    res.send(docs);

                    //Mail Send
                    const nodemailer = require("nodemailer");

                async function main() {
                    console.log("Mail Sending Started...");
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'isurupathumherath1@gmail.com',
                            pass: 'iph22923'
                        }
                    });

                    var mailOptions = {
                        from: 'quarantine@out.com',
                        to: `${req.body.email}`,
                        subject: 'Your Login Details',
                        text: `
                        Hello Patient, 

                        Thank you for making a reservation.
                        
                        We are expecting you on [2021/10/16]. 
                        
                        We look forward to your visit and hope we will be enjoying your meal experience at Doocore as much as we will be enjoying your company. 
                        
                        See you very !!!!

                        
                        [Doccore Staff]`
                    };

                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                        }
                    });

                }

                main().catch(console.error);
                }else{
                    console.log(JSON.stringify(err,undefined,2))
                }
            })
        }else{
            console.log("no record dublicate");
            res.send(err,undefined,2)

            
        }
    })
})

router.put('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(req.params.id)
    }

    var updateRecords={
        roomName: req.body.roomName,
        roomType: req.body.roomType,
        description: req.body.description,
        image: req.body.image,
        total: req.body.total,
    }

    room.findByIdAndUpdate(req.params.id, { $set: updateRecords},{new:true}, (err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

router.delete('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(req.params.id)
    }

    room.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, uniqid() + '-' +file.originalname )
  }
})

var upload = multer({ storage: storage }).single('file')

router.post('/upload',function(req, res) {
     
    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })


})
router.get('/feedback',(req,res)=>{
    room.find((err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

router.post('/feedback',(req,res)=>{
    console.log(res);
    var record= new feedback({
        fname: req.body.fname,
        lname: req.body.lname,
        nic: req.body.nic,
        email: req.body.email,
        checkin: req.body.checkin,
        checkout: req.body.checkout,
        roomid: req.body.roomid,
        patientid: req.body.patientid,
        feedback: req.body.feedback,
    })
    feedback.findOne({email: req.body.email},(err,docs)=>{
        if(!docs){
            record.save((err,docs)=>{
                if(!err){
                    res.send(docs)
                }else{
                    console.log(JSON.stringify(err,undefined,2))
                }
            })
        }else{
            console.log("no record dublicate");
            res.send(err,undefined,2)
        }
    })
})



module.exports = router