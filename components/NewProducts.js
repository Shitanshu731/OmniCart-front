import Center from "./Center";
import ProductBox from "./ProductBox";

export default function NewProducts({products}){
    return (
        <Center>
            <div className="grid grid-cols-3">
                {products?.length > 0 && products.map(product => (
                    <div key={product.id}>
                    <ProductBox {...product} />
                    </div>
                )) }
            </div>
        </Center>
    )
}