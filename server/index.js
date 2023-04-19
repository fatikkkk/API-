import express from 'express'
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import fileUpload from 'express-fileupload'
import organizationRoute from './routes/OrganizationRoute.js'
import contractRoute from './routes/EmploymentContractRoute.js'
import medcardRoute from './routes/MedicalCardRoute.js'

const app = express()
dotenv.config()

//  Constants
const PORT = process.env.PORT || 3002
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_CLUSTER = process.env.DB_CLUSTER
const DB_NAME = process.env.DB_NAME

app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use(express.static('uploads'))

//  Routes
// http://localhost:3001/api/organization
app.use('/api/organization', organizationRoute)

// http://localhost:3001/api/contract
app.use('/api/contract', contractRoute)

// http://localhost:3001/api/medcard
app.use('/api/medcard', medcardRoute)



async function start(){
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.idnbxaz.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
        console.log('Server connected with DataBase!')
        app.listen(PORT, function (req, res) {
            var url = req.headers.host + '/' + req.url;
            console.log(url)
        }, () =>{
            console.log(`server started on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()