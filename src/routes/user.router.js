import exprees from 'express'
import userController from '../controllers/user.controller.js'

const router = exprees.Router()

router.get('/', userController.getUsers)
router.post('/', userController.saveUser)

export default router
