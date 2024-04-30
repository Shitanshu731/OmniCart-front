import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default function Homepage({featuredProduct,newProducts}) {
  console.log({newProducts});
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} />
    </div>
  )
}

export async function getServerSideProps() {
  try {
    await mongooseConnect(); // Assuming this function establishes the MongoDB connection

    const featuredProductId = '662f4b06cf6261f72d7b5430';
    const featuredProduct = await Product.findById(featuredProductId).lean();

    const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 10 }).lean();

    return {
      props: {
        featuredProduct : JSON.parse(JSON.stringify(featuredProduct)),
        newProducts : JSON.parse(JSON.stringify(newProducts))
      }
    };
  } catch (err) {
    console.log(err);
  }
}