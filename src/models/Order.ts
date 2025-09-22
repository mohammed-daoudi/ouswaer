import mongoose, { Document, Schema } from "mongoose";

export interface IShippingAddress {
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone?: string;
}

export interface IOrder extends Document {
  userId: string;
  orderNumber: string;
  items: Array<{
    productId: string;
    title: string;
    sku: string;
    quantity: number;
    price: number;
  }>;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "canceled";
  paymentStatus: "pending" | "paid" | "failed" | "refunded";
  shippingAddress: IShippingAddress;
  tracking?: string;
  notes?: string;
}

const ShippingAddressSchema = new Schema<IShippingAddress>({
  name: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true, default: 'US' },
  phone: String,
});

const OrderSchema = new Schema<IOrder>({
  userId: { type: String, required: true },
  orderNumber: { type: String, required: true, unique: true },
  items: [{
    productId: { type: String, required: true },
    title: { type: String, required: true },
    sku: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 0 },
  }],
  subtotal: { type: Number, required: true, min: 0 },
  shipping: { type: Number, required: true, min: 0, default: 0 },
  tax: { type: Number, required: true, min: 0, default: 0 },
  total: { type: Number, required: true, min: 0 },
  status: {
    type: String,
    enum: ["pending", "confirmed", "processing", "shipped", "delivered", "canceled"],
    default: "pending"
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "paid", "failed", "refunded"],
    default: "pending"
  },
  shippingAddress: { type: ShippingAddressSchema, required: true },
  tracking: String,
  notes: String,
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);
