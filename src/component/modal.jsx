import { useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./LandingPage.css"
import { Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
function JoinModal() {
  const form = useRef();
  const [show, setShow] = useState(false);
  const [firstName , setFirstName] = useState("")
  const [lastName , setLastName] = useState("")
  const [email , setEmail] = useState("")
  const handleClose = () => {
    if (firstName !== "" && lastName !== "" && email !== "") {
      setShow(false)
      setFirstName("")
      setLastName("")
      setEmail("")
    }
  };
  const handleShow = () => setShow(true);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7nnhhyf', 'template_udr92lw', form.current, {
        publicKey: '_pB76iJLiK--Hulfc',
      })
      .then(
        (e) => {
          console.log('SUCCESS!' , e.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
    );
    e.target.reset()
  };

  return (
    <>
      <button className='join-us-btn' onClick={handleShow}>
        Join Waiting List
      </button>

      <Modal show={show} size='lg'centered onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title className=' text-light'>Contact Info</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <Form ref={form} onSubmit={(e) => sendEmail(e)} className='join-form d-flex flex-column'>
          <Form.Group className="mb-3" controlId="formGroupFirstName">
            <Form.Label className='text-light'>First Name</Form.Label>
            <Form.Control type="text" placeholder='First Name' name='user_first_name' value={firstName} onChange={(e)=> setFirstName(e.target.value)} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupLastName">
            <Form.Label className=' text-light'>Last Name</Form.Label>
            <Form.Control type="text" placeholder='Last Name' name='user_last_name' value={lastName} onChange={(e)=>setLastName(e.target.value)} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className=' text-light'>Email</Form.Label>
            <Form.Control type="Email" placeholder='Email' name='user_email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          </Form.Group>
          <button className='submit-btn px-5 py-2 align-self-center' onClick={handleClose}>
            Send
          </button>
      </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default JoinModal;