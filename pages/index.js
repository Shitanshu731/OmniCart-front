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

export async function getServerSideProps(){
  try{
    const featuredProductId = '662e5cd3d5c6b70d99152155';
    await mongooseConnect();
    const featuredProduct = await Product.findById(featuredProductId);
    const newProducts = await Product.find({},null, {sort : {'_id':-1}, limit:10});
    return {
      props : {featuredProduct : JSON.parse(JSON.stringify(featuredProduct)),
               newProducts : JSON.parse(JSON.stringify(newProducts))}
    }
  }
  catch(err){
      console.log(err);
  }

}