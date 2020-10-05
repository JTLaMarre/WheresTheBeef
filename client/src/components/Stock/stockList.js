import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
class StockList extends Component {
  render() {

    return (
      <Col lg={{ span: 3, offset: 1 }}>
        <Card>
          <Card.Body>
            <Card.Title>store:{`this.props.storeName`}</Card.Title>
            <Card.Title>address:{`this.props.storeAddress`}</Card.Title>
            <Card.Title>product:{`this.props.item`}</Card.Title>
            <Card.Text>
              {`${this.props.item} is out of stock`}
            </Card.Text>
            {/* button should delete items from list of out of stock items */}
            <Button variant="primary">Click here if back in stock</Button>
          </Card.Body>
        </Card>
        {/* I think we will want to make a single component and map over it in tha app.js  */}
      </Col>


    );
  }
}

export default StockList;

