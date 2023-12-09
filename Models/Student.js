import mongoose from 'mongoose';

const StudentScehema = new mongoose.Schema({
    studentName: {
        type: String,
    },
    studentAge: {
        type: String,
    },
    fatherName: {
        type: String
    },
    admissionDate: {
        type: String
    },
    admissionClass: {
        type: String
    },
    currentFees: {
        type: String
    },
    currentClass: {
        type: String
    },
    studentDescription: {
        type: String
    },
    feesPaid: {
        type: Array
    },
    feesUnpaid: {
        type: Array
    }
},
    { timestamps: true }
)

export default mongoose.model("Student", StudentScehema)