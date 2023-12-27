import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardText,
  CardTitle,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardImg src={product.image} height={200} />
      <CardBody>
        <CardTitle>{product.title}</CardTitle>
        <CardText>{product.description.slice(0, 50)}...</CardText>
      </CardBody>
      <CardFooter>
        <Button as={Link} to={`/product-detail/${product.id}`}>
          See more
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
