import express from 'express';

import {createProperty, getAllProperties, deleteProperty, getPropertyDetails, updateProperty 
} from '../controllers/property.controller.js';
 
//create intance of the router
const router = express.Router();

//create routes
router.route('/').get( getAllProperties);
router.route('/').post( createProperty);
router.route('/:id').get( getPropertyDetails);
router.route('/:id').patch( updateProperty);
router.route('/:id').delete( deleteProperty);

export default router;
