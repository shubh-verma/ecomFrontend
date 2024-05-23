// import { useState } from "react";
import productList from "./products.json"
export type Product =
  {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  };

const Card = () => {
  // const [productList] = useState<Product[]>(products);
  return (
    <>
      <div className="container">
        <div className="my-4 grid grid-cols-4 gap-4">
          {productList.length
            ? productList.map((product) => (
              <div className="card w-88 bg-base-100 shadow-sm" key={product.id}>
                <figure><img className="max-h-48 max-w-88" src={product.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{product.title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{product.description}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">{product.price}</div>
                    <div className="badge badge-outline">{product.category}</div>
                  </div>
                </div>
              </div>
            ))
            : null}
        </div>
      </div>
    </>
  );
};

export default Card;