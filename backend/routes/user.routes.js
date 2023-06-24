import express from 'express';
import { authUser,regUser,logoutUser,getUserProfile,updateUserProfile } from '../controller/user.controller.js';

const router = express.Router();

router.post('/auth', authUser);
router.post('/', regUser);
router.post('/logout', logoutUser);
router.route('/profile')
    .get(getUserProfile)
    .patch(updateUserProfile);


export default router;