import Activity from '../Model/Activity.mjs'
import Client from '../Model/Client.mjs'

export default {
  async getActivities (req, res) {
    try {
      const activities = await Activity.findAll()
      return res.status(200).json(activities)
    } catch (err) {
      console.error(err)
      return res.status(500).json({ message: 'Internal server error' })
    }
  },

  async addActivity (req, res) {
    const { nameRequest, dateRequest, clientEmailRequest, descriptionRequest } = req.body
    if (!nameRequest || !dateRequest || !clientEmailRequest || !descriptionRequest) {
      return res.status(400).json({ message: 'Bad Request, All fields are required' })
    }

    try {
      const clients = await Client.findByPk(clientEmailRequest)
      if (clients === null) {
        return res.status(406).json({ message: 'Not acceptable, client doesn`t exist' })
      }
    } catch (err) {
      return res.status(400).json({ message: 'Bad Request, something went wrong' })
    }

    try {
      await Activity.create({
        name: nameRequest,
        date: dateRequest,
        clientEmail: clientEmailRequest,
        description: descriptionRequest
      })
      return res.status(201).json({ message: 'Activity saved succesfully' })
    } catch (err) {
      return res.status(406).json({ message: 'Error storing the activity' })
    }
  },

  async getActivityByPk (req, res) {
    const { id } = req.params
    console.log(id)
    try {
      const foundedActivity = await Activity.findByPk(id)
      console.log(foundedActivity)
      if (foundedActivity !== null) {
        const client = await Client.findByPk(foundedActivity.clientEmail)
        return res.status(200).json({
          id: foundedActivity.id,
          name: foundedActivity.name,
          date: foundedActivity.date,
          client,
          description: foundedActivity.description
        })
      } else {
        return res.status(404).json({ message: 'Not found' })
      }
    } catch (err) {
      console.error(err)
      return res.status(500).json({ message: 'Internal server error' })
    }
  }
}
