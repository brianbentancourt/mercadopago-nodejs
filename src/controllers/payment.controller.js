import mercadopago from 'mercadopago'
import { HOST, MERCADOPAGO_ACCESS_TOKEN } from '../config.js'

export const createOrder = async (req, res) => {
    mercadopago.config({
        access_token: MERCADOPAGO_ACCESS_TOKEN
    })

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: 'Laptop',
                unit_price: 100,
                quantity: 1,
                currency_id: 'UYU'
            }
        ],
        back_urls: {
            success: `${HOST}/success`,
            failure: `${HOST}/failure`,
            pending: `${HOST}/pending`
        },
        notification_url: 'http://localhost:3000/webhook'
    })

    console.log(result)

    res.send('Creating order')
}

export const receiveWebhook = async (req, res) => {
    try {
        const payment = req.query
        console.log(req.query)
        console.log(req.body)

        if (payment.type === 'payment') {
            const data = await mercadopago.payment.findById(payment['data.id'])
            console.log(data)

            if (data.status === 'approved') {
                // save data to database
            }
        }

        res.send(204)
    } catch (error) {
        console.log(error)
        res.send(500)
    }

}