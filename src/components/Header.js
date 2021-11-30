import React from "react";
import { useSelector } from "react-redux";

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href={null}>
          Navbar
        </a>
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
            <li className="nav-item active">
              <a className="nav-link" href={null}>
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={null}>
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href={null}
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href={null}>
                  Action
                </a>
                <a className="dropdown-item" href={null}>
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href={null}>
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <div style={{ color: "black" }}>{showTotalAmount(cart)}</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
