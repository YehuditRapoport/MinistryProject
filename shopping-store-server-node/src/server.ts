import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/db';
import orderRoutes from './routes/orderRoutes';

const app = express();
const PORT = process.env.PORT || 7000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Use order routes
app.use('/api', orderRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
