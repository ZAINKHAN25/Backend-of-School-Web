import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from "mongoose";

import addStudentData from './controllers/addStudentData.js';
import getAllStudents from './controllers/getAllStudents.js';
import filterStudentData from './controllers/filterStudentData.js';
import updateStudentfees from './controllers/updateStudentfees.js';


const app = express();
const port = 8000;


dotenv.config();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connect hogya db se");

    app.get('/allStudents', getAllStudents)
    app.post('/addStudent', addStudentData);
    app.post('/sigleStudent', filterStudentData)
    app.put('/updateStudentFees', updateStudentfees)

})


app.listen(port, () => {
    console.log(`App is listening on port number http://localhost:${port}`);
})