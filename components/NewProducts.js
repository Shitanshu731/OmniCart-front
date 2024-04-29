import Center from "./Center";
import ProductBox from "./ProductBox";

export default function NewProducts({products}){
    return (
        <div className="mx-auto w-[70%] mt-2 ">
            <div className="grid grid-cols-4 gap-5 max-md:grid-cols-2">
                {products?.length > 0 && products.map(product => (
                    <div key={product.id}>
                    <ProductBox {...product} />
                    </div>
                )) }
            </div>
        </div >
    )
}