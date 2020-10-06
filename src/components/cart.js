import { Link } from "gatsby"
import React from "react"  
// import { Link } from "gatsby"
// import Img from "gatsby-image"

const Cart = () => {
  return ( 
    <div id="cart">
      <h1>My Shopping Cart</h1>
      <Link to="/checkout">
        <button className="uk-button uk-button-default">Checkout</button>
      </Link>
    </div>  
  );
}

export default Cart;
