import React, { useState } from "react"
import { Modal, Button, Accordion, Card } from "react-bootstrap"

const DreamMod = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            DREAM
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>


            <Accordion>
            <Card>
                <Card.Header>
                <h3> Effie </h3>
                <Accordion.Toggle as={Button} eventKey="0">
                    Explore More
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>Effie Stuff</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                  <h3> Not Effie </h3>
                <Accordion.Toggle as={Button} eventKey="1">
                    Explore More
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Not Effie Stuff</Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>



        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default DreamMod;