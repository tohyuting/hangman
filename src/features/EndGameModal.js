import React from 'react';
import { Modal, Button } from 'react-bootstrap';



function EndGameModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            { props.header }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{ props.content }</h4>
          <p>{ props.answer }</p>
        </Modal.Body>
        <Modal.Footer>
          <Button href="/">Back to Home</Button>
          <Button href="/themes">New Game</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default EndGameModal;