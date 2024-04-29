import Center from "./Center"

export default function Featured({product}) {
  return (
    <div className="bg-[#222] text-white py-[50px] px-0">
      <Center>
        <div className="grid gap-[40px] grid-cols-2">
          <div>
            <div>
              <h1 className="m-0 font-normal">{product.title}</h1>
              <p className="text-[#aaa] font-[0.8rem]">
                {product.description}
              </p>
              <div className="flex items-center mt-[10px] gap-3">
                <button className="rounded-sm border-2 p-2">
                  Read more
                </button>
                <button className="bg-blue-500 border-2 rounded-sm p-2 flex gap-[10px] " >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div>
            <img className="max-w-[100%]" src={product.images[1]} alt={product?.title} />
          </div>
        </div>
      </Center>
    </div>
  );
}
