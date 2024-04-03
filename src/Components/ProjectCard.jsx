import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div><Card style={{ width: '18rem' }} onClick={handleShow}>
    <Card.Img variant="top" src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" />
    <Card.Body>
      <Card.Title className='text-center'>Project Title</Card.Title>
     
    </Card.Body>
  </Card>
  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <img src="" alt="" />
            </div>
            <div className="col-6 text-center">
                  <h2>Project Title</h2>
                  <p style={{textAlign:'justify'}}>Description:Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum autem neque numquam architecto. Rem expedita quod, eos ratione optio provident reprehenderit, nulla dignissimos deleniti ad ea. Quas, est ipsa!</p>
                  <p>Technology used:<b>React,node</b></p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='me-3'><FaGithub /></Button>
          <Button className='me-3'><FaLink /></Button>
          
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
  </div>
  
  )
}

export default ProjectCard