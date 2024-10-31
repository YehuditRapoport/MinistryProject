"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveOrder = void 0;
const orderModel_1 = __importDefault(require("../models/orderModel"));
// POST endpoint to save the order
const saveOrder = async (req, res) => {
    const { firstName, lastName, email, address, products } = req.body;
    // Create a new order
    const newOrder = new orderModel_1.default({ firstName, lastName, email, address, products });
    console.log(newOrder);
    try {
        await newOrder.save();
        res.status(201).json({ message: 'Order saved successfully!' });
    }
    catch (error) {
        console.error("Error saving order:", error);
        res.status(500).json({ message: 'Failed to save order.' });
    }
};
exports.saveOrder = saveOrder;
