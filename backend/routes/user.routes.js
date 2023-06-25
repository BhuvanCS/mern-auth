import express from 'express';
import { authUser,regUser,logoutUser,getUserProfile,updateUserProfile } from '../controller/user.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/auth', authUser);
router.post('/', regUser);
router.post('/logout', logoutUser);
router.route('/profile')
    .get(protect, getUserProfile)
    .patch(protect, updateUserProfile);


export default router;