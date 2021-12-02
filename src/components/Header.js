import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showTotalAmountQuantity } from "./CartResult";
const showTotalAmount = (cart) => {
  var total = 0;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].product.price * cart[i].quantity;
    }
  }
  return total;
};
function Header() {
  const cart = useSelector((state) => state.cart);

  return (
    /* eslint-disable jsx-a11y/anchor-is-valid */
    <header>
      <nav className=" navbar navbar-expand-lg navbar-light bg-light fixed-top scrolling-navbar">
        {/* navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-light bg-light scrolling-navbar double-nav */}

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item" style={{backgroundColor:'#CEE5D0'} }>
              {/* <a className="nav-link" href={null}>
                Home <span className="sr-only">(current)</span>
              </a> */}
              <Link to={'/about'} className="nav-link">About</Link>
            </li>

            <li className="nav-item">
              <Link to={'/'} className="nav-link" >
                <i class="bi bi-house-door-fill"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/cart'} className="nav-link" >
                Cart
              </Link>
            </li>
          </ul>
          <div style={{ color: "black", fontWeight: 'bolder', fontSize: "20px" }}>Tổng tiền: {showTotalAmount(cart)}$</div>
          <div> <Link to={'/cart'} className="nav-link" style={{position:'relative'}}>
            <i className="fa fa-shopping-cart" style={{fontSize:'26px'}}></i>
            <span className="quantity">{showTotalAmountQuantity(cart)}</span>
          </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
