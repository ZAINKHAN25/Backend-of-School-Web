import Student from "../Models/Student.js";

async function addStudentData(req, res) {
    try {
        const { studentName, studentAge, fatherName, admissionDate, admissionClass, currentFees, currentClass, studentDescription, feesPaid, feesUnpaid } = req.body;

        if (studentName === "" || admissionClass === "" || admissionDate === "" || currentFees === "") {
            res.status(401).send("Please fill up the form correctly");
        } else {
            const newStudent = new Student({
                studentName, studentAge, fatherName, admissionDate, admissionClass, currentFees, currentClass, studentDescription, feesPaid, feesUnpaid
            });

            const student = await newStudent.save();
            res.status(200).json(student)
        }
    } catch (error) {
        console.error(error);
        res.status(404).send("Server is overload try again later")
    }
}


export default addStudentData;