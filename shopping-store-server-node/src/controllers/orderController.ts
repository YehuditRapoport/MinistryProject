import { Request, Response } from 'express';
import Order from '../models/orderModel';


// POST endpoint to save the order
export const saveOrder = async (req: Request, res: Response) => {
    const { firstName, lastName, email, address, products } = req.body;

    // Create a new order
    const newOrder = new Order({ firstName, lastName, email, address, products });
   console.log(newOrder)
    try {
        await newOrder.save();
        res.status(201).json({ message: 'Order saved successfully!' });
    } catch (error) {
        console.error("Error saving order:", error);
        res.status(500).json({ message: 'Failed to save order.' });
    }
};
