import EmploymentContractModel from "../models/EmploymentContractModel.js"
import sendEmail from "../utils/sendEmail.js"


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

export const sendNotification = async (req, res) => {
    try {

        const employee = await EmploymentContractModel.findById(req.params.id)

        if (!employee) {
            return res.status(404).json({ message: 'Not Found employee' })
        }

        const message = `Прошу вас, ${employee.surname} ${employee.name} ${employee.patronymic} приехать в поликлинику 
        по следующему адресу: г. Оренбург, ул. Кобозева, д. 46! Необходимо посетить 42 и 44 кабинет`

        try {
            await sendEmail({
                email: req.body.email,
                subject: `Поликлиника! Пришлашаем вас на прием!`,
                message,
            });

            res.status(200).json({
                success: true,
                message: `Email sent to ${req.body.email} successfully`,
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Error send notification for Employee',
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Error send notification for Employee',
        })
    }
}

