import mongoose from 'mongoose'

const EmploymentContract = new mongoose.Schema(
    {
        surname: {type: String, required: [true, 'Please Enter a Your Surname']},
        name: {type: String, required: [true, 'Please Enter a Your Name']},
        patronymic: {type: String},
        dateOfBirthday: {type: Date, required: true},
        nameOrganization: {type: mongoose.Schema.ObjectId, ref: 'Organization'},
        dateStartWork: {type: Date, default: Date.now},
        workingRate: {type: Number, required: true},
        position: {
            fullNamePosition: {type: String, required: true},
            shortNamePosition: {type: String, required: true},
        }
    }
)

export default mongoose.model('EmploymentContract', EmploymentContract)