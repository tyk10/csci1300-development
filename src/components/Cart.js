import "./Cart.css";

import CartItemList from "./CartItemList";

import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";

export default function Cart(props) {
  return (
    <Col id="cart" xs={5} sm={5} md={4} lg={3}>
      <div id="cart-wrapper">
        <h2 id="my-cart-title">
          My Cart{" "}
          <sup>
            <Badge pill style={{ fontSize: "small" }}>
              {props.numItems}
            </Badge>
          </sup>
        </h2>
        {Object.keys(props.cartItems).length !== 0 ? (
          <CartItemList
            cartItems={props.cartItems}
            bakeryPrices={props.bakeryPrices}
          />
        ) : (
          <div />
        )}
        <h3 id="my-cart-total">
          {" "}
          Total: ${Math.round(props.total * 100) / 100}
        </h3>
      </div>
    </Col>
  );
}
