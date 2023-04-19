import MedicalCardModel from "../models/MedicalCardModel.js"


//  Создание новой мед. карты
export const createMedCard = async (req, res) => {
    //  Обработка ошибок
    try {
        //  Получение значений с запроса
        const { idEmployee } = req.body

        //  Создание новой записи в документе
        const newMedCard = new MedicalCardModel({
            idEmployee
        })

        //  Сохранение изменений
        await newMedCard.save()
        console.log('Send data from controller')

        //  Отображение добавленной мед.карты
        return res.json(newMedCard)
        
    } catch (error) {
        console.log(error)
    }
}

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




