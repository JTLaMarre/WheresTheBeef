import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import { Row, Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap'; 
import {Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import './ReportForm.css';
import axios from 'axios';
import { set } from 'mongoose';

const ReportForm=()=>{
 
const [store ,setStore]=useState('');
const [storeAddress , setStoreAddress]=useState('');
const[product, setProduct]=useState('')

    
    const handleTest = () => {
      axios.get("/").then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(`error: ${err}`)
      })
      
      console.log(`
      store:${store}
      storeAddress:${storeAddress}
      product:${product}`)
    
    }
  const handleSubmit =(e)=>{
    console.log(`
    store:${store}
    storeAddress:${storeAddress}
    product:${product}`)

    e.preventDefault()
  }



    
        return (
          <div >
            <Container>
            <button onClick={handleTest} >test</button>
                <Row>
                    <Col lg={{ span: 4, offset: 2 }}>
                        <Card
                         bg="info"
                        
                         text= 'light' 
                         style={{ width: '40em' }}
                         className="reportContainer">
            <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={3}>
                <div style={{marginLeft:'1em', marginTop:'2em'}}>Store</div>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="Enter Store" style={{marginTop:'2em'}} value={store} onChange={e => setStore(e.target.value) } />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={3}>
                <div style={{marginLeft:'1em', marginTop:'2em'}}>Store Address</div>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="Enter Store Address" style={{marginTop:'2em'}} value={storeAddress} onChange={e=>setStoreAddress(e.target.value)} />
              </Col>
            </Form.Group>
          
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={3}>
                <div style={{marginLeft:'1em'}}>Product</div>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="Enter Product" value={product} onChange={e=>setProduct(e.target.value)} />
              </Col>
            </Form.Group>
            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={3}>
                 <div style={{marginLeft:'1em'}}>Products In / Out of Stock</div>
                </Form.Label>
                <Col sm={8}>
                  <Form.Check
                    type="radio"
                    label="In Stock"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="Out of Stock"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                  
                </Col>
              </Form.Group>
            </fieldset>
            
          
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 5 }}>
                <Button type="submit" onClick={handleSubmit}>Submit</Button>
              </Col>
            </Form.Group>
          </Form>
          </Card>
          </Col>
          </Row>
          </Container>
          </div>
        );
        }


export default ReportForm;
