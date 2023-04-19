import { Router } from "express"
import { createMedCard, newRecord } from "../controllers/MedCardController.js"


const router = new Router()

router.post('/createMedCard', createMedCard)

router.put('/:id', newRecord)

export default router