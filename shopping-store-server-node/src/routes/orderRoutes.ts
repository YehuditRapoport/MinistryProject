import express from 'express';
import { saveOrder } from '../controllers/orderController';

const router = express.Router();

// Define the routes
router.post('/orders', saveOrder);

export default router;
