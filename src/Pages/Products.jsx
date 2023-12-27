import React from "react";
import useFetch from "../hooks/useFetch";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const [products, loading] = useFetch("https://fakestoreapi.com/products");
  return loading ? (
    <h2>Loading products...</h2>
  ) : (
    <div className="row g-3">
      {products.map((p) => (
        <div className="col-md-6 col-lg-4" key={p.id}>
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
};

export default Products;
