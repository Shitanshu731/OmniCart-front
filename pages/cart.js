import { CartContext } from "@/components/CartContext";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CountUp from "react-countup";

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    }
  }, [cartProducts]);
  function moreProduct(id) {
    addProduct(id);
  }
  function leastProduct(id) {
    removeProduct(id);
  }
  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }
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
                      <button
                        className="px-2 py-1 bg-slate-400 rounded-sm"
                        onClick={() => leastProduct(product._id)}
                      >
                        -
                      </button>
                      {cartProducts.filter((id) => id === product._id).length}
                      <button
                        className="px-2 py-1 bg-slate-400 rounded-sm"
                        onClick={() => moreProduct(product._id)}
                      >
                        +
                      </button>
                    </td>
                    <td>
                      {cartProducts.filter((id) => id === product._id).length *
                        product.price}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <CountUp
                      duration={1}
                      prefix="$ "
                      decimal=","
                      end={`${total}`}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
        {!!cartProducts.length && (
          <div className="gap-4 bg-slate-200 rounded-[10px] p-[30px] flex flex-col">
            <h2>Order Information</h2>
            <input
              className="outline-none p-2 rounded-sm shadow-lg"
              type="text"
              placeholder="Address"
            />
            <input
              className="outline-none p-2 rounded-sm shadow-lg"
              type="text"
              placeholder="Address2"
            />
            <input
              className="outline-none p-2 rounded-sm shadow-lg"
              type="email"
              placeholder="email"
            />
            <div className="flex gap-4">
              <input
                className=" w-[50%] outline-none p-2 rounded-sm shadow-lg"
                type="text"
                placeholder="City"
              />
              <input
                className="w-[50%] outline-none p-2 rounded-sm shadow-lg"
                type="text"
                placeholder="Postal Code"
              />
            </div>
            <input
              className="outline-none p-2 rounded-sm shadow-lg"
              type="text"
              placeholder="Street Address"
            />
            <input
              className="outline-none p-2 rounded-sm shadow-lg"
              type="text"
              placeholder="Country"
            />
            <button className="bg-black text-white border-1 p-1 rounded-[10px]">
              Continue to Payment
            </button>
          </div>
        )}
      </div>
    </>
  );
}
