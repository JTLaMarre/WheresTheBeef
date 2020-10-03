import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import { Row} from 'react-bootstrap';
import { Col }from 'react-bootstrap';
class StockList extends Component {
    render() {
        return (
           
                <Row>
                    <Col lg={{ span: 3, offset: 1 }}> 
            <Card>
            <Card.Body>
            <Card.Title>Store Name</Card.Title>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>
                Quantity: use state here?
              </Card.Text>
              <Button variant="primary">Out of Stock?</Button>
            </Card.Body>
          </Card>
          
          </Col>
          <Col lg={{ span: 3, offset: 1 }}> 
            <Card>
            <Card.Body>
            <Card.Title>Store Name</Card.Title>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>
                Quantity: use map here 
              </Card.Text>
              <Button variant="primary">Out of Stock?</Button>
            </Card.Body>
          </Card>
          
          </Col>
          <Col lg={{ span: 3, offset: 1 }}> 
            <Card>
            <Card.Body>
            <Card.Title>Store Name</Card.Title>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>
                Quantity: use map here 
              </Card.Text>
              <Button variant="primary">Out of Stock?</Button>
            </Card.Body>
          </Card>
          
          </Col>
          </Row>
        
        );
    }
}

export default StockList;

