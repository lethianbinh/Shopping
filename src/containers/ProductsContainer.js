import React from "react";
import Products from "../components/Products";
import Product from "../components/Product";
import { actAddToCart, actChangeMessage } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";

function ProductsContainer(props) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const onAddToCart = (product) => {
    dispatch(actAddToCart(product, 1));
  };

  const onChangeMessage = (message) => {
    dispatch(actChangeMessage(message));
  };

  const showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
            onAddToCart={onAddToCart}
            onChangeMessage={onChangeMessage}
          />
        );
      });
    }
    return result;
  };

  return <Products>{showProducts(products)}</Products>;
}

export default ProductsContainer;
