import Layout from "../components/layout";
import { SummonedCat } from "../components/Summoner";
import { Copyright } from "../components/Copyright";
import { Modal, Button } from "react-bootstrap"
import { useState } from "react"

export default function Cats() {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let web = true
  if(process.browser){
    let clientWidth = screen.width
    if(clientWidth < 1200){
      web = false
    }
  }

  return (
    <Layout>
      <Modal className="modal" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">{(web)?"Click":"Touch"} to summon another cat</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" className="btn-close-modal" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      <SummonedCat />
      <Copyright />
    </Layout>
  );
}
