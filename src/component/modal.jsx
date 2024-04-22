import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./LandingPage.css"
import { Form } from 'react-bootstrap';

function JoinModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='join-us-btn' onClick={handleShow}>
        Join Waiting List
      </button>

      <Modal show={show} size='lg'centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className=' text-light'>Contact Info</Modal.Title>
        </Modal.Header>
        <Modal.Body >

        <Form className='join-form'>
          <Form.Group className="mb-3" controlId="formGroupFirstName">
            <Form.Label className='text-light'>First Name</Form.Label>
            <Form.Control type="text" placeholder='First Name'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupLastName">
            <Form.Label className=' text-light'>Last Name</Form.Label>
            <Form.Control type="text" placeholder='Last Name'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className=' text-light'>Email</Form.Label>
            <Form.Control type="Email" placeholder='Email'/>
          </Form.Group>
      </Form>

        </Modal.Body>
        <Modal.Footer>
          <button  className='submit-btn px-5 py-2' onClick={handleClose}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default JoinModal;