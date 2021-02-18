import Layout from "../components/layout";
import { SummonedCat } from "../components/Summoner";
import { Copyright } from "../components/Copyright";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

export default function Cats({images}) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let web = true;
  if (process.browser) {
    let clientWidth = screen.width;
    if (clientWidth < 1200) {
      web = false;
    }
  }

  return (
    <Layout>
      <Modal className="modal" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">
            {web ? "Click" : "Touch"} to summon another cat
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="btn-close-modal"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <SummonedCat images={images}/>
      <Copyright />
    </Layout>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {

  const catImgs = scanCatPhotos()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      images: catImgs,
    },
  };
}

function scanCatPhotos(){
  const path = require('path')
  const fs = require('fs')

  const photosDir = "public/cats";
  const fullPhotosDir = path.join(process.cwd(), photosDir);
  const filenames = fs.readdirSync(fullPhotosDir);
  return filenames
}
