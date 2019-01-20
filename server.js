var exp = require('express');
var app=exp();
var path=require('path');
var mongo=require('mongodb').MongoClient;
var bodyParser=require('body-parser');
app.use(bodyParser.json());
var bcrypt= require('bcrypt-nodejs');
var mongoose=require('mongoose')

var jwt=require('jsonwebtoken');
var expressjwt=require('express-jwt')

app.use(exp.static(path.join(__dirname,'dist/Neutrinos')));
var dbo;
mongo.connect('mongodb://vijay:vijay123@ds261114.mlab.com:61114/neutrinos',(err,db)=>{
    if (err) throw err;
    dbo=db.db('neutrinos');
})


app.post('/login', (req, res) => {

    console.log(req.body.password);
    //comparing email id
    dbo.collection('user').findOne({ "email": req.body.email }, (err, result) => {
        if (err) throw err;
        console.log(result);
        k=result;
        //comparing password
        bcrypt.compare(req.body.password, result.password, (err, resul) => {
            console.log(resul);
            if (err) throw err;
            // res.send({"msg":"success"})
            if (resul) {
                var id=result._id;
                // console.log('yes')
                var wt = jwt.sign({ tokenId: id }, 'vijay');
                res.status(200).json({
                    "idToken": wt,
                    expiresIn: '1h',
                })

                console.log(wt)
            }
            else {
                console.log(false)
            }
        })
    })
})


// const checkif=expressjwt({
//     secret:'vijay'
// })

app.route('/getcomp').get((req,res)=>{
    dbo.collection('complaint').find().toArray((err,compData)=>{
        if (err) throw err
        res.send(compData);
        console.log(compData)
    })
})

// app.route('/updateMed').put((req,res)=>{
//     console.log(req.body);
//     var id=new mongoose.Types.ObjectId(req.body._id)
//     console.log(id);

//     dbo.collection('complaint').update({_id:id},{medName:req.body.medName,medType:req.body.medType,medUsage:req.body.medUsage,
//         quantity:req.body.quantity,medComp:req.body.medComp,medPrice:req.body.medPrice},(err,update)=>{
//         if (err) throw err
//         dbo.collection('medicine').find().toArry((err,updatemed)=>{
//             if (err) throw err
//             res.send(updatemed);
//         })
        
        
//     })
// })

app.listen('4000',(err,sucess)=>{

    if (err) throw err;
    console.log("server is runing on port 4000")
});