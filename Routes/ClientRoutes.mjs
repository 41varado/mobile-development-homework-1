import express from 'express'
import clientController from '../Controller/ClientController.mjs'
import { body, validationResult } from 'express-validator'

const router = express.Router()

router.get('/clients', clientController.getClients)
router.post('/client', body('emailRequest').isEmail().withMessage('Invalid email format'),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
  },
  clientController.addClient)
router.get('/client/:email', clientController.getClientByPk)

export default router
