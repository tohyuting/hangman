import React, { useState } from "react";
import './MainPage.css';
import EndGameModal from '../features/EndGameModal';
import { Button } from 'react-bootstrap';
import { Display } from '../features/display/Display';
import Banner from '../features/banner/Banner';

function MainPage() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="container">
      <Banner />
      <div className="mainPage">
      <Display />
      <Button variant="primary" onClick={() => setModalShow(true)}>
        End Game
      </Button>
      <EndGameModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        header="Are you sure you want to quit?"
        content="Don't give up yet!"
        answer="Try Harder!!"
      />
      </div>
    </div>
  )
}

export default MainPage;