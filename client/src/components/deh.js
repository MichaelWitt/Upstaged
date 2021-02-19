import React, { useState } from "react"
import { Button } from "react-bootstrap"
import DehMod from "./dehmod";
  
const dehCharacters = () => {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <DehMod
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
export default dehCharacters;