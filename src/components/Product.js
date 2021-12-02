import React from "react";
import * as Message from "../constants/Message";

function Product(props) {
  const { product, onAddToCart, onChangeMessage} = props;

  const addToCart = (product) => {
    onAddToCart(product);
    onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    alert("Đã thêm vào giỏ hàng")
  };
  const showRatings = (rating) => {
    var result = [];
    for (var i = 1; i <= rating; i++) {
      result.push(<i key={i} className="fa fa-star"></i>);
    }
    for (var j = 1; j <= 5 - rating; j++) {
      result.push(<i key={i + j} className="fa fa-star-o"></i>);
    }
    return result;
  };

  return (
    /* eslint-disable jsx-a11y/anchor-is-valid */
    <div className="col-lg-4 col-md-6 mb-r">
      <div className="card text-center card-cascade narrower">
        <div className="view overlay hm-white-slight z-depth-1">
          <img src={product.image} className="img-fluid" alt={product.name} />
        </div>
        <div className="card-body">
          <h4 className="card-title">
            <strong>
              <a href={null}>{product.name}</a>
            </strong>
          </h4>
          <ul className="rating">
            <li>{showRatings(product.rating)}</li>
          </ul>
          <p className="card-text">{product.description}</p>
          <div className="card-footer">
            <span className="left" style={{color: 'red', fontSize: '25px', fontWeight: 'bolder'}}>{product.price}$</span>
            <span className="right">
              <a
                className="btn-floating blue-gradient"
                data-toggle="tooltip"
                data-placement="top"
                href={null}
                data-original-title="Add to Cart"
                onClick={() => addToCart(product)}
                id = 'buy'
              >
                <i className="fa fa-shopping-cart"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
