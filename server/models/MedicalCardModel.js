import mongoose from "mongoose";

const MedicalCardSchema = new mongoose.Schema(
    {
        creationDate: { type: Date, default: Date.now },
        idEmployee: { type: mongoose.Schema.ObjectId, ref: 'EmploymentContract', required: true },
        recordsInfo: [
            {
                records: {
                    dateOfPassage: { type: Date, required: true, default: Date.now },
                    finalResult: { type: String, required: true },
                    accessSign: { type: String, required: true, default: 'Годен' },
                },
                doctorInfo: {
                    surname: { type: String, required: [true, 'Please Enter a Doctor Surname'] },
                    name: { type: String, required: [true, 'Please Enter a Doctor Name'] },
                    patronymic: { type: String },
                    position: { type: String, required: true },
                }
            }],
    }
)

export default mongoose.model('MedicalCard', MedicalCardSchema)