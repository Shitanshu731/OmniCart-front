import { model, models, Schema } from "mongoose";

const OrderSchema = new Schema({
  line_items: Object,
  name: String,
  email: String,
  postalCode: String,
  streetAddress: String,
  country: String,
  paid: boolean,
});

export const Order = models?.Order || model("Order", OrderSchema);
