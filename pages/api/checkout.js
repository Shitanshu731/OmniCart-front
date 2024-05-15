import { Product } from "@/models/product";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.json("should be a post request");
    return;
  }
  const { name, email, city, postalCode, streetAddress, country, products } =
    req.body;
  const productIds = products.split(",");
  const uniqueIds = [...new Set(productIds)];
  const productInfos = await Product.find({ _id: uniqueIds });

  let line_items = [];
  for (const productId of uniqueIds) {
    const productInfo = productInfos.find(
      (p) => p._id.toString() === productId
    );
    const quantity = productIds.filter((id) => id === productId)?.length || 0;
    if (quantity > 0 && productInfo) {
      line_items.push({
        quantity,
        price_data: {
          currency: "USD",
          product_data: { name: productInfo.title },
          unit_amount: quantity * productInfo.price,
        },
      });
    }
  }
  res.json({ line_items });
}
