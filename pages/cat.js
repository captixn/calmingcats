import Layout from "../components/layout";
import { SummonedCat } from "../components/Summoner";
import { Copyright } from "../components/Copyright";
import { Modal, Button } from "react-bootstrap"
import { useState } from "react"

export default function Cats() {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Layout>
      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Click to summon another cat</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" className="btn-close-modal" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <SummonedCat />
      <Copyright />
    </Layout>
  );
}
