import MedicalCardModel from "../models/MedicalCardModel.js"


//  Создание новой мед карты
export const createMedCard = async (req, res) => {
    try {
        
        const { idEmployee } = req.body
        const newMedCard = new MedicalCardModel({
            idEmployee
        })
        await newMedCard.save()
        console.log('Send data from controller')
        return res.json(newMedCard)
    } catch (error) {
        console.log(error)
    }
}

//  Добавление записи
export const newRecord = async (req, res) => {
    try {

        const medcard = await MedicalCardModel.findById(req.params.id)

        if (!medcard) {
            return res.status(404).json({ message: 'Not found a med card' })
        }

        medcard.recordsInfo.push(req.body.recordsInfo)

        console.log(medcard.recordsInfo)

        await medcard.save()

        res.status(200).json({
            message: 'success',
            medcard
        })

    } catch (error) {
        console.log(error)
    }
}




