import mongoose from 'mongoose'

const OrganizationSchema = new mongoose.Schema(
    {
        fullName: {type: String, required: [true, 'Please Enter a full name']},
        shortName: {type: String, required: [true, 'Please Enter a short name']},
        legalAddress: {type: String, required: [true, 'Please Enter a legal address']},
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }
)

export default mongoose.model('Organization', OrganizationSchema)