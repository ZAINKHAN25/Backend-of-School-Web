// controllers/updateAdmissionFees.js

import Student from '../Models/Student.js';

async function updateAdmissionFees(req, res) {
    try {
        const students = await Student.find();

        students.forEach(async (singleStudent) => {
            const studentAdmissionDate = singleStudent.admissionDate;

            // Check if AdmissionDate is present and not undefined
            if (studentAdmissionDate) {
                const studentAdmissionMonth = parseInt(studentAdmissionDate.split('/')[0]);

                const currentDate = new Date();
                const currentMonth = currentDate.getMonth() + 1;

                if (studentAdmissionMonth < currentMonth) {
                    singleStudent.feesPaid.forEach((singleMonth) => {
                        if (singleMonth.monthnumber < currentMonth) {
                            // If the month is not paid, update feesUnpaid array
                            const isMonthInFeesUnpaid = singleStudent.feesUnpaid.some(item => item.monthnumber === singleMonth.monthnumber);

                            if (!isMonthInFeesUnpaid) {
                                singleStudent.feesUnpaid.push({
                                    monthnumber: singleMonth.monthnumber,
                                    year: singleMonth.year,
                                    monthFees: 0
                                });
                            }
                        }
                    });

                    // Save the updated student document
                    await singleStudent.save();
                }
            }
        });

        res.status(200).json({ message: 'Admission fees update successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default updateAdmissionFees;
