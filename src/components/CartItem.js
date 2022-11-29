import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

export default function CartItem(props) {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start bg-light"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{props.item}</div>
        <div>{"$" + Math.round(props.price * props.number * 100) / 100}</div>
      </div>
      <Badge bg="primary" pill>
        {props.number}
      </Badge>
    </ListGroup.Item>
  );
}
