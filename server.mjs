import dotenv from 'dotenv'
import clientRoutes from './Routes/ClientRoutes.mjs'
import activityRoutes from './Routes/ActivityRoutes.mjs'
import express from 'express'
dotenv.config()

const app = express()

app.disable('x-powered-by')
app.use(express.json())

const port = process.env.PORT ?? 1234

app.use('/api', clientRoutes)
app.use('/api', activityRoutes)
app.use((req, res, next) => {
  res.status(404).send('Pagina no encontrada')
})

app.listen(port, () => {
  console.log('API corriendo en el puerto ', port)
})
