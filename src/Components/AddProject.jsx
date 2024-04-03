import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button className='btn btn-dark m-5' onClick={handleShow}>Add</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
          <div className="col-6 mt-1 p-5">
          <label>
          <input type="file" style={{display:'none'}} />
          <img width={'250px'} src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif" alt="" />
         </label>
          </div>
          <div className="col-6">
            <input type="text" placeholder='Project Title' className='form-control mb-3'/>
            <input type="text" placeholder='Languages Used' className='form-control mb-3'/>
            <input type="text" placeholder='Git hub link' className='form-control mb-3'/>
            <input type="text" placeholder='Live link' className='form-control mb-3'/>

            <input type="text" placeholder='OverView' className='form-control mb-3'/>

          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject