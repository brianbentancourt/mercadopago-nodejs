import { config } from "dotenv"
config()

export const PORT = 3000
export const HOST = `http://localhost:${PORT}`

export const MERCADOPAGO_ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN