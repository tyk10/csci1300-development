import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bakeryData from "./assets/bakery-data.json";

import BakeryItemList from "./components/BakeryItemList";
import MyNavbar from "./components/MyNavbar";
import Cart from "./components/Cart";

import { useState } from "react";
import Container from "react-bootstrap/Container";

let bakeryPrices = {};
let minCalories = Number.MAX_VALUE;
let maxCalories = Number.MIN_VALUE;

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
  minCalories = Math.min(minCalories, item.calories);
  maxCalories = Math.max(maxCalories, item.calories);
  bakeryPrices[item.name] = item.price;
});
/* ############################################################## */

function App() {
  const [total, setTotal] = useState(0);
  const [numItems, setNumItems] = useState(0);
  const [cartItems, setCartItems] = useState({});

  const onAddingCart = (name) => {
    if (cartItems[name] !== undefined) {
      setCartItems({ ...cartItems, [name]: cartItems[name] + 1 });
    } else {
      setCartItems({ ...cartItems, [name]: 1 });
    }
    setNumItems(numItems + 1);
    setTotal(total + bakeryPrices[name]);
  };

  const onRemovingCart = (name) => {
    if (cartItems[name] !== undefined && cartItems[name] > 0) {
      if (cartItems[name] === 1) {
        const newCartItems = { ...cartItems };
        delete newCartItems[name];
        setCartItems(newCartItems);
      } else {
        setCartItems({ ...cartItems, [name]: cartItems[name] - 1 });
      }
      setNumItems(numItems - 1);
      setTotal(total - bakeryPrices[name]);
    }
  };

  return (
    <div>
      <MyNavbar />
      <div className="App">
        <Container>
          <BakeryItemList
            bakeryData={bakeryData}
            cartItems={cartItems}
            onAddingCart={onAddingCart}
            onRemovingCart={onRemovingCart}
            minCalories={minCalories}
            maxCalories={maxCalories}
          />
          <Cart
            numItems={numItems}
            cartItems={cartItems}
            bakeryPrices={bakeryPrices}
            total={total}
          />
        </Container>
      </div>
    </div>
  );
}

export default App;
