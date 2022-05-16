import React from "react";
import './MainPage.css';
import EndGameModal from '../features/EndGameModal';
import { Button } from 'react-bootstrap';

function MainPage() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="container">
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
              </Button>   
            <EndGameModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default MainPage;