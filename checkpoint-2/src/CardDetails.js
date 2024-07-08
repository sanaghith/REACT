import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const cardDetails = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
      />
      <Card.Body>
        <Card.Title>Cats</Card.Title>
        <Card.Text>
          Like dogs, cats look very different from people but share many of our
          body’s characteristics, such as a circulatory system, lungs, a
          digestive tract, a nervous system, and so on
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default cardDetails;
