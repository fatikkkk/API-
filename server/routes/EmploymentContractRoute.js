import { Router } from "express"
import { createContract, sendNotification } from "../controllers/ContractController.js"


const router = new Router()

router.post('/createContract', createContract)

router.get('/sendEmail/:id', sendNotification)

export default router