import React, { useState } from "react"
import { Button } from "react-bootstrap"
import CharMods from "../components/CharMods"
import AppNav from "../components/Navbar"
import Deh from "../components/deh"
import Dream from "../components/dream"
  
const Characters = () => {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <AppNav />
        < h1> DEH Characters</h1>
        <Deh />

        <h1> DREAM Characters </h1>
        <Dream />

        {/* <Button variant="primary" size="lg" onClick={() => setModalShow(true)}>
          Launch ve
        </Button>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <CharMods
          show={modalShow}
          onHide={() => setModalShow(false)}
        /> */}
      </>
    );
  }
  
export default Characters;