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
            Well done! / Try again!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Answer was...</h4>
          <p>sth</p>
        </Modal.Body>
        <Modal.Footer>
          <Button href="/">Back to Home</Button>
          <Button href="/themes">New Game</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default EndGameModal;