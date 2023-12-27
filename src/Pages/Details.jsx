import React from "react";
import { useParams, useMatch } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Details = () => {
  const { id } = useParams();
  const [product, loading] = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  return loading ? (
    <h2>Loading details of product {id}</h2>
  ) : (
    <div>{product.title}</div>
  );
};

export default Details;
