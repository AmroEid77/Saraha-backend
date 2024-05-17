import {Router} from 'express'
import  * as UserController from './user.controller.js'
import { asyncHandler } from '../../utilities/errorHandling.js';
import { auth } from '../../middleware/auth.midlleware.js';
import fileUpload from '../../utilities/multer.js';
const router = Router();

router.get('/profile',asyncHandler(auth),asyncHandler(UserController.getProfile))
router.patch('/profilePic',asyncHandler(auth), fileUpload().single('image'),asyncHandler(UserController.uploadImage))
export default router;