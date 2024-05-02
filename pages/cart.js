import { CartContext } from "@/components/CartContext";
import Header from "../components/Header";
import { useContext } from "react";

export default function CartPage() {
  const { cartProducts } = useContext(CartContext);
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 gap-[70px] mt-[40px] px-20">
        <div className="bg-slate-200 rounded-[10px] p-[30px]">
          {!cartProducts?.length && <div>Your Cart is Empty</div>}
          {cartProducts.length > 0 && (
            <>
              <h2>Cart</h2>
              {cartProducts.map((productId) => (
                <h2>{productId}</h2>
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
