import { useState } from "react";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { createContact } from "../../graphql/mutations";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { v4 as uuid } from "uuid";

export default function Contacts(props) {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    cell: "",
  });
  const [profilePic, setProfilePic] = useState("");

  const addNewContact = async () => {
    const { name, email, cell } = contactData;

    Storage.configure({ region: "us-east-1" });
    const { key } = await Storage.put(`${uuid()}.png`, profilePic, {
      contentType: "image/png",
    });

    const newContact = {
      id: uuid(),
      name,
      email,
      cell,
      profilePicPath: key,
    };
    await API.graphql(graphqlOperation(createContact, { input: newContact }));
  };

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
      </Row>
      <Row className="px-4 my-5">
        <Col sm={3}>
          <h2>Add New Contact</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contact name"
                value={contactData.name}
                onChange={(evt) =>
                  setContactData({ ...contactData, name: evt.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Contact email"
                value={contactData.email}
                onChange={(evt) =>
                  setContactData({ ...contactData, email: evt.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Cell</Form.Label>
              <Form.Control
                type="text"
                placeholder="nnn-nnn-nnnn"
                value={contactData.cell}
                onChange={(evt) =>
                  setContactData({ ...contactData, cell: evt.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Profile Pic</Form.Label>
              <Form.Control
                type="file"
                accept="image/png"
                onChange={(evt) => setProfilePic(evt.target.files[0])}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={addNewContact}>
              Add Contact &gt;&gt;
            </Button>
            {/* <Button variant="primary" type="button">
              Add Contact &gt;&gt;
            </Button> */}
            &nbsp;
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
