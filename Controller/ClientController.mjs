import Client from '../Model/Client.mjs'

export default {
  async getClients (req, res) {
    try {
      const clients = await Client.findAll()
      return res.status(200).json(clients)
    } catch (err) {
      console.error(err)
      return res.status(500).json({ message: 'Internal server error' })
    }
  },

  async addClient (req, res) {
    const { emailRequest, nameRequest, lastnameRequest, phoneNumberRequest } = req.body

    if (!emailRequest || !nameRequest || !lastnameRequest || !phoneNumberRequest) {
      return res.status(400).json({ message: 'Bad Request, All fields are required' })
    }

    try {
      const client = await Client.findByPk(emailRequest)
      if (client !== null) {
        return res.status(409).json({ message: 'Conflict, a client already have this email' })
      }
    } catch (err) {
      console.error('Error: ', err)
    }

    try {
      await Client.create({
        email: emailRequest,
        name: nameRequest,
        lastname: lastnameRequest,
        phoneNumber: phoneNumberRequest
      })
      return res.status(201).json({ message: 'Client saved succesfully' })
    } catch (err) {
      return res.status(406).json({ message: err })
    }
  },

  async getClientByPk (req, res) {
    const { email } = req.params
    try {
      const foundedClient = await Client.findByPk(email)
      if (foundedClient !== null) {
        return res.status(200).json(foundedClient)
      } else {
        return res.status(404).json({ message: 'Not found' })
      }
    } catch (err) {
      console.error(err)
      return res.status(500).json({ message: 'Internal server error' })
    }
  }
}
