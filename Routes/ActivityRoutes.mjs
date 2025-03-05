import express from 'express'
import activityController from '../Controller/ActivityController.mjs'

const router = express.Router()

router.get('/activities', activityController.getActivities)
router.post('/activity', activityController.addActivity)
router.get('/activity/:id', activityController.getActivityByPk)

export default router
