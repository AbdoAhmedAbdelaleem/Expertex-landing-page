import { useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./LandingPage.css"
import { Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import smile from "./images/smile (1).png"
function JoinModal() {
  const [show, setShow] = useState(false);
  const [thanks , setThanks] = useState(true)
  const [firstName , setFirstName] = useState("")
  const [lastName , setLastName] = useState("")
  const [email, setEmail] = useState("")
  
  const handleClose = () => {
    setThanks(false)
    setShow(false)
  };
  const handleShow = () => setShow(true);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wgaq2xn', 'template_z13vdbq', form.current, {
        publicKey: 'GGqJEAf6af1_mauNF',
      })
      .then(
        (e) => {
          console.log('SUCCESS!', e.text);
          setThanks(true)
          setFirstName("");
          setLastName("");
          setEmail("");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
    );
  };

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
          {
            !thanks ? <Form ref={form} onSubmit={sendEmail} className='join-form d-flex flex-column'>
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
            <button className='submit-btn px-5 py-2 align-self-center'>
              Join
            </button>
            </Form> 
              : 
              <div className='thanksMessage d-flex align-items-center justify-content-center flex-column'>
                <img className='mb-4' style={{width:"100px"}} src={smile} alt=''/>
                <p className='text-light text-capitalize fs-4' style={{fontFamily:"Inter"}}>
                    Thanks for joining Expertex waiting list
                </p>
              </div>
          }
        </Modal.Body>
      </Modal>
    </>
  );
}

export default JoinModal;