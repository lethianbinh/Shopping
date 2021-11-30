import React from "react";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as Message from "../constants/Message";
import { useSelector, useDispatch } from "react-redux";
import {
  actChangeMessage,
  actDeleteProductInCart,
  actUpdateProductInCart,
} from "../actions/index";

function CartContainer() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const showCartItem = (cart) => {
    const onDeleteProductInCart = (product) => {
      dispatch(actDeleteProductInCart(product));
    };

    const onChangeMessage = (message) => {
      dispatch(actChangeMessage(message));
    };

    const onUpdateProductInCart = (product, quantity) => {
      dispatch(actUpdateProductInCart(product, quantity));
    };

    let result = (
      <tr>
        <td>{Message.MSG_CART_EMPTY}</td>
      </tr>
    );

    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onDeleteProductInCart={onDeleteProductInCart}
            onChangeMessage={onChangeMessage}
            onUpdateProductInCart={onUpdateProductInCart}
          />
        );
      });
    }
    return result;
  };

  const showTotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };

  return (
    <Cart>
      {showCartItem(cart)}
      {showTotalAmount(cart)}
    </Cart>
  );
}
export default CartContainer;
