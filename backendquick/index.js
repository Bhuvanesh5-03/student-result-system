import express from 'express';
import getDataBase from './db.js'
import cors from 'cors'

const app=express();
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
    "https://quick-score.netlify.app"
}))
app.post('/MarkCheck',async(req,res)=>{
    try{
        const student=req.body;
        const database=await getDataBase();
        const data=await database.collection('studentMark').findOne(student);
        if(data){
            res.send("false");
        }
        else{
            res.send("true");
        }
    }catch(err){
        res.status(500).send(err);
    }
})
app.post('/Result',async(req,res)=>{
    try{
        const student=req.body;
        const database=await getDataBase();
        const data=await database.collection('studentMark').findOne({$and :[{roll:student.roll},{dob:student.dob}]});
        if(data){
            res.json(data)
        }
        else{
            res.send("false");
        }
    }catch(err){
        res.status(500).send(err);
    }
})
app.post('/MarkEnter',async(req,res)=>{
    try{
    const newStudent =req.body.newStudent
    const database=await getDataBase();
    const insert=await database.collection('studentMark').insertOne(newStudent);
    if(insert){
        res.send("true")
    }
    else{
        res.send("false");
    }
    }catch(err){
        res.status(500).send(err);
    }
})


app.listen(8000,()=>console.log("Server is listening"));