import mongoose, { Schema, Document } from 'mongoose';


interface IProduct {
    id: string;
    name: string;
    category: string;
}


interface IContactOrder extends Document {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    products: IProduct[]; 
}


const contactOrderSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    products: [{ 
        id: { type: String, required: true },
        name: { type: String, required: true },
        category: { type: String, required: true },
    }],
});


const ContactOrder = mongoose.model<IContactOrder>('ContactOrder', contactOrderSchema);

export default ContactOrder;