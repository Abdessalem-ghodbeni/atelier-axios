import { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";

export const Event = ({ event, showBook }) => {
  const [ev, setEv] = useState(event);
  const handleClick = () => {
    showBook();
    setEv((prev) => {
      return {
        ...prev,
        nbParticipants: prev.nbParticipants + 1,
        nbTickets: prev.nbTickets - 1,
      };
    });
  };
  const HandleUpdate = (e = async () => {});
  return (
    <>
      <Card style={{ width: "18rem" }} className="me-5 mt-4">
        <Card.Img variant="top" src={`/images/${ev.img}`} />
        <Card.Body>
          <Card.Title>{ev.name}</Card.Title>
          <Card.Text>{ev.description}</Card.Text>
          <Card.Text>Price: {ev.price}</Card.Text>
          <Card.Text>Tickets: {ev.nbTickets}</Card.Text>
          <Card.Text>Participants: {ev.nbParticipants}</Card.Text>
          <Button variant="outline-dark" onClick={handleClick}>
            Book an Event
          </Button>
          <Button variant="outline-primary" onClick={handleClick}>
            Update
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
