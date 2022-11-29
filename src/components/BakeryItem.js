import "./BakeryItem.css";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import { BsPlus, BsDash } from 'react-icons/bs';

export default function BakeryItem(props) {
  return (
      <Card className="bakery-card">
        <Card.Img 
          variant="top" 
          src={props.data.image}
          style={{ paddingTop: "12px" }}
        />
        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
          <Card.Text style={{marginBottom: "0.5rem" }}>{"[" + props.data.type + "] - " + props.data.calories + "cal"}</Card.Text>
          <Card.Text>{props.data.description}</Card.Text>
          <Card.Text className="price">{"$" + props.data.price}</Card.Text>
          <Row className="cart-actions">
            <Button 
                className="add-remove-btn col-4"
                onClick={() => props.onRemovingCart(props.data.name)}
              >
                <BsDash/>
            </Button>
            <div style={{whiteSpace: "nowrap", textAlign: "center", padding: "0"}} className="col-4">{props.number === undefined ? 0 : props.number}</div>
            <Button 
              className="add-remove-btn col-4"
              onClick={() => props.onAddingCart(props.data.name)}
            >
              <BsPlus/>
            </Button>
          </Row>
          
        </Card.Body>
      </Card>
    );
}