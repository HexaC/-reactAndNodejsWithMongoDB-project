import { Form, Button } from 'react-bootstrap';


function CreateCardComp({clickHandler}) {

  return <div onMouseOver={()=> {

      {document.getElementById('formBasicBusinessName').value.length >= 2 ? document.getElementById('nameValid').style.color = "#000" : document.getElementById('nameValid').style.color = "#FF0000"}
      {document.getElementById('formBasicBusinessName').value.length < 2 ? document.getElementById('check').disabled = true : document.getElementById('check').disabled = false}

      {document.getElementById('formBasicBusinessDescription').value.length >= 2 ? document.getElementById('descriptionValid').style.color = "#000" : document.getElementById('descriptionValid').style.color = "#FF0000"}
      {document.getElementById('formBasicBusinessDescription').value.length < 2 ? document.getElementById('check').disabled = true : document.getElementById('check').disabled = false}

      {document.getElementById('formBasicBusinessAddress').value.length >= 2 ? document.getElementById('addressValid').style.color = "#000" : document.getElementById('addressValid').style.color = "#FF0000"}
      {document.getElementById('formBasicBusinessAddress').value.length < 2 ? document.getElementById('check').disabled = true : document.getElementById('check').disabled = false}

      {document.getElementById('formBasicBusinessPhone').value.length >= 9 ? document.getElementById('phoneValid').style.color = "#000" : document.getElementById('phoneValid').style.color = "#FF0000"}
      {document.getElementById('formBasicBusinessPhone').value.length < 9 ? document.getElementById('check').disabled = true : document.getElementById('check').disabled = false}

      }}>
  <Form>
    <Form.Group className="mb-3" controlId="formBasicBusinessName">
      <Form.Label>Business Name</Form.Label>
      <Form.Control type="text" />
      <Form.Text id="nameValid">Minimum 2 characters, Maximum 255 characters.</Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicBusinessDescription">
      <Form.Label>Business Description</Form.Label>
      <Form.Control type="text" />
      <Form.Text id="descriptionValid">Minimum 2 characters, Maximum 1024 characters.</Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicBusinessAddress">
      <Form.Label>Business Address</Form.Label>
      <Form.Control type="text" />
      <Form.Text id="addressValid">Minimum 2 characters, Maximum 400 characters.</Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicBusinessPhone">
      <Form.Label>Business Phone</Form.Label>
      <Form.Control type="text" />
      <Form.Text id="phoneValid">Minimum 9 numbers, Maximum 10 numbers.</Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicBusinessImage">
      <Form.Label>Business Image</Form.Label>
      <Form.Control type="text" />
    </Form.Group>
    <Button id="check" variant="primary" type="submit" onClick={(e)=>{
        e.preventDefault();
        clickHandler({
          bizName: document.getElementById('formBasicBusinessName').value,
          bizDescription: document.getElementById('formBasicBusinessDescription').value,
          bizAddress: document.getElementById('formBasicBusinessAddress').value,
          bizPhone: document.getElementById('formBasicBusinessPhone').value,
        });
        }}>
        Create Card
    </Button>
  </Form>
</div>
    
}

export default CreateCardComp;