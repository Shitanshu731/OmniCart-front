import { CartContext } from "@/components/CartContext";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function CartPage() {
  const { cartProducts } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    }
  }, [cartProducts]);
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 gap-[70px] mt-[40px] px-20">
        <div className="bg-slate-200 rounded-[10px] p-[30px]">
          {!cartProducts?.length && <div>Your Cart is Empty</div>}
          {products.length > 0 && (
            <>
              <h2>Cart</h2>
              {products.map((product) => (
                <h2 key={product._id}>
                  {product.title} :{" "}
                  {cartProducts.filter((id) => id === product._id).length}
                </h2>
              ))}
            </>
          )}
        </div>
        {!!cartProducts.length && (
          <div className="bg-slate-200 rounded-[10px] p-[30px] flex flex-col">
            <h2>Order Information</h2>
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Address2" />
            <button className="bg-black text-white border-1 p-1 rounded-[10px]">
              Continue to Payment
            </button>
          </div>
        )}
      </div>
    </>
  );
}
