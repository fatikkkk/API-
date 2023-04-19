import OrganizationModel from "../models/OrganizationModel.js";


export const createOrganization = async (req, res) => {
    try {
        const {fullName, shortName, legalAddress} = req.body
        const newOrganization = new OrganizationModel({
            fullName,
            shortName,
            legalAddress,
        })
        await newOrganization.save()
        console.log('Send data from controller')
        return res.json(newOrganization)
    } catch (error) {
        console.log(error)
    }
}
