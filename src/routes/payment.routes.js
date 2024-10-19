import { Router } from "express"

const router = Router()

router.get('/create-order', (req, res) => {
    res.send('Creating order')
})

router.get('/success', (req, res) => {
    res.send('Payment success')
})

router.get('/webhook', (req, res) => {
    res.send('Webhook')
})

export default router