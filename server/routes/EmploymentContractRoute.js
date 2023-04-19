import { Router } from "express"
import { createContract } from "../controllers/ContractController.js"


const router = new Router()

router.post('/createContract', createContract)

export default router