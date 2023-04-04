import  express from 'express';

import {createUser, getAllUsers,  getUserInfoByID} from '../controllers/user.controller.js';

// initialize intance of the router
const router = express.Router();

//create routes
router.route('/').get( getAllUsers);
router.route('/').post( createUser);
router.route('/:id').get( getUserInfoByID);

export default router;