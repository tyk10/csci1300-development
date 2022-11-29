import BakeryItem from "./BakeryItem";

import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";

const filterTypes = ["Pastry", "Bread", "Cake", "All"];
const sortTypes = ["Featured", "Calories", "Price"];

export default function BakeryItemList(props) {
  // "All", "Pastry", "Bread", "Cake"
  const [filterType, setFilterType] = useState("All");
  // (min calories, max calories)
  const [filterCalories, setFilterCalories] = useState(props.maxCalories);
  // "Featured", "Calories", "Price"
  const [sortType, setSortType] = useState("Featured");

  // Cards to display
  const [toDisplay, setToDisplay] = useState([]);

  const handleCaloriesSelect = (e) => {
    let caloriesRange = props.maxCalories - props.minCalories;
    setFilterCalories(
      Math.round(props.minCalories + (e.target.value / 100.0) * caloriesRange)
    );
  };

  // Updates the list of card to display everytime a related state changes
  useEffect(() => {
    const compareFns = {
      Calories: (a, b) => a.calories - b.calories,
      Price: (a, b) => a.price - b.price,
    };
    setToDisplay(
      (sortType === "Featured"
        ? props.bakeryData
        : [...props.bakeryData].sort(compareFns[sortType])
      ).filter((item) => {
        if (filterType === "All") {
          return item.calories <= filterCalories;
        } else {
          return item.type === filterType && item.calories <= filterCalories;
        }
      })
    );
  }, [props.bakeryData, filterType, filterCalories, sortType]);

  return (
    <Container id="item-list" xs={6} sm={6} md={8} lg={9}>
      <Container className="d-flex flex-wrap util-bar">
        <div className="d-flex align-items-center mb-lg-0 me-auto">
          <div>
            {/* Filter by type dropdown */}
            <span style={{ paddingRight: "0.5rem" }}>Filter By:</span>
            <DropdownButton
              variant="outline-secondary"
              title={filterType}
              onSelect={setFilterType}
              style={{ paddingRight: "2.5rem" }}
            >
              {filterTypes
                .filter((item) => item !== filterType)
                .map((item, index) => (
                  <Dropdown.Item key={item} eventKey={item}>
                    {item}
                  </Dropdown.Item>
                ))}
            </DropdownButton>
          </div>
          {/* Filter by maximum calories slider */}
          <Col>
            <Form.Label style={{ marginBottom: "0", fontSize: "" }}>
              Max Calories: {filterCalories}
            </Form.Label>
            {props.minCalories !== Number.MAX_VALUE &&
            props.maxCalories !== Number.MIN_VALUE ? (
              <Form.Range defaultValue={100} onChange={handleCaloriesSelect} />
            ) : (
              <Form.Range disabled />
            )}
          </Col>
        </div>
        <div className="col-lg-auto mb-lg-0 align-items-center">
          {/* Sort by calories or price dropdown */}
          <span style={{ paddingRight: "0.5rem" }}>Sort By:</span>
          <DropdownButton
            variant="outline-secondary"
            title={sortType}
            onSelect={setSortType}
          >
            {sortTypes
              .filter((item) => item !== sortType)
              .map((item, index) => (
                <Dropdown.Item key={item} eventKey={item}>
                  {item}
                </Dropdown.Item>
              ))}
          </DropdownButton>
        </div>
      </Container>
      {/* List of bakery item cards */}
      <Col>
        <Row style={{ justifyContent: "space-around", height: "30rem" }}>
          {toDisplay.map((item, index) => (
            <BakeryItem
              key={index}
              data={item}
              number={props.cartItems[item.name]}
              onAddingCart={props.onAddingCart}
              onRemovingCart={props.onRemovingCart}
            />
          ))}
        </Row>
      </Col>
    </Container>
  );
}
