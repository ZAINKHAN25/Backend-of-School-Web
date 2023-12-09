import Student from '../Models/Student.js';

async function getAllStudents(req, res) {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default getAllStudents;
