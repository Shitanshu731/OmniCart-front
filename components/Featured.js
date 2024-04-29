import Center from "./Center"

export default function Featured({product}) {
  // const div = styled.div`
  //   background-color: #222;
  //   padding: 50px 0;
  //   color: #fff;
  // `;
  // const h1 = styled.h1`
  //   margin: 0;
  //   font-weight: normal;
  // `;
  // const div = styled.p`
  //   color: #aaa;
  //   font-size: 0.8rem;
  // `;

  // const div = styled.div`
  //   display: grid;
  //   grid-template-columns: 0.9fr 1.1fr;
  //   gap: 40px;
  //   img {
  //     max-width: 100%;
  //   };
  // `;
  // const div = styled.div`
  //   display: flex;
  //   align-items: center;
  // `;
  // const div = styled.div`
  //   display: flex;
  //   gap: 10px;
  //   margin-top : 10px;
  // `;
  return (
    <div>
      <Center>
        <div>
          <div>
            <div>
              <h1>{product.title}</h1>
              <div>
                {product.description}
              </div>
              <div>
                <button white="true" outline="true" >
                  Read more
                </button>
                <button primary="true" >
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
            <img src={product.images[1]} alt={product?.title} />
          </div>
        </div>
      </Center>
    </div>
  );
}
