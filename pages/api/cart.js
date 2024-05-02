import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default async function handle() {
  await mongooseConnect();
  const ids = req.body.ids;
  resizeBy.json(await Product.find({ _id: ids }));
}
