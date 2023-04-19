import EmploymentContractModel from "../models/EmploymentContractModel.js";


export const createContract = async (req, res) => {
    try {
        
        const { surname, name, patronymic, dateOfBirthday, nameOrganization, workingRate, position, } = req.body
        const newContract = new EmploymentContractModel({
            surname,
            name,
            patronymic,
            dateOfBirthday,
            nameOrganization,
            workingRate,
            position
        })
        await newContract.save()
        console.log('Send data from controller')
        return res.json(newContract)
    } catch (error) {
        console.log(error)
    }
}

