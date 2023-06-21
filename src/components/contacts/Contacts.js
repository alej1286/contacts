import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Contacts() {
  return (
    <Container>
      <Row className="px-4 my-5">
        <Col>
          <h1>Contacts</h1>
        </Col>
      </Row>
      <Row className="px-4 my-5">
        <Col className="px-2 my-2">
          <Card style={{ width: "12rem" }}>
            <Card.Img src="image/contact_1.png" variant="top" />
            <Card.Body>
              <Card.Title>Stacy</Card.Title>
              <Card.Text>
                Stacy
                <br />
                786.234.543
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-2 my-2">
          <Card style={{ width: "12rem" }}>
            <Card.Img src="image/contact_2.png" variant="top" />
            <Card.Body>
              <Card.Title>Robert</Card.Title>
              <Card.Text>
                Robert
                <br />
                786.234.543
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-2 my-2">
          <Card style={{ width: "12rem" }}>
            <Card.Img src="image/contact_3.png" variant="top" />
            <Card.Body>
              <Card.Title>Lady</Card.Title>
              <Card.Text>
                Lady
                <br />
                786.234.543
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
