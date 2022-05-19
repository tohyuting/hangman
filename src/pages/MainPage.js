import React from "react";
import './MainPage.css';
import EndGameModal from '../features/EndGameModal';
import { Button } from 'react-bootstrap';
import { Letters } from '../features/letters/Letters';
import { Display } from '../features/display/Display';

function MainPage() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="container">
      <Display />
      <Letters />
      <Button variant="primary" onClick={() => setModalShow(true)}>
        End Game
      </Button>
      <EndGameModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default MainPage;