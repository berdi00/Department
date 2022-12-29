import React from 'react'
import { Modal, Button, Table } from 'react-bootstrap'
import IteratedModal from './IteratedModal'

const VerticallyCenteredModal = (props) => {
  console.log(props.data)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Schedule
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {typeof props.data === "undefined" ? <h1>no schedule for u</h1> : <Table striped bordered hover>
      <tbody>
        {props.data.map((data) => (
        <IteratedModal key={data.day} data={data} />

        ))}
        
      </tbody>
    </Table>}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default VerticallyCenteredModal