import Featured from "@/components/Featured";
import Header from "@/components/Header";

export default function Homepage() {
  // console.log(product);
  return (
    <div>
      <Header />
      <Featured />
    </div>
  )
}

// export async function getServerSideProps(){
//     const featuredProductId = '662e5cd3d5c6b70d99152155';
//     await mongooseConnect();
//     const product = await Product.findById(featuredProductId);
//     return {
//       props : {product : JSON.parse(JSON.stringify(product))}
//     }

// }