import Student from '../Models/Student.js';

async function getStudentByName(req, res) {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'StudentName parameter is required' });
        }

        const student = await Student.find({ studentName: { $regex: new RegExp(name, 'i') } });

        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.status(200).json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default getStudentByName;
