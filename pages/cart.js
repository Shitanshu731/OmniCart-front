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
          <h2>Cart</h2>
          {products.length > 0 && (
            <table>
              <thead>
                <tr className="flex gap-10 items-center">
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id} className="flex gap-10 items-center">
                    <td>
                      <div className="max-w-[150px] max-h-[150px] p-[10px] bg-[#f0f0f0] rounded-[10px] shadow-lg flex items-center flex-col">
                        <img
                          className="max-w-[90px] max-h-[90px] items-center"
                          src={product.images[0]}
                        />
                      </div>
                      <h2 className="text-center font-semibold">
                        {product.title}
                      </h2>
                    </td>
                    <td>
                      {cartProducts.filter((id) => id === product._id).length}
                    </td>
                    <td>{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
