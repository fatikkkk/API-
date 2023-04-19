import { Router } from "express"
import { createOrganization } from "../controllers/OrganizationController.js"


const router = new Router()

router.post('/createOrganization', createOrganization)

export default router