import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './EndGameModal.module.css';

function EndGameModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className={styles.modal} closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            { props.header }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modal}>
          <h4 className={styles.content}>{ props.content }</h4>
          <p className={styles.answer}>{ props.answer }</p>
        </Modal.Body>
        <Modal.Footer className={styles.modal}>
          <Button className={styles.homeBtn} href="/">Back to Home</Button>
          <Button className={styles.newGameBtn} href="/themes">New Game</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default EndGameModal;