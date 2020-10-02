import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import './Jumbotron.css';
class Hero extends Component {
    render() {
        return (
           <Jumbotron className="jumbo">
               <Container>
                   <Row>
                       <Col lg={{ span: 6, offset: 6 }}>
                       <h1 >Where's the Beef</h1>
                       </Col>
                   </Row>
                   <Row>
                       <Col lg={{ span: 6, offset: 6 }}>
                       <h3>Find out if your favourite item is in or out of stock</h3>
                       </Col>
                       
                   </Row>
                   <Row>
                   <Col md={{ span:6, offset:12}}>
                   <i className="fas fa-chevron-down"></i>
                       </Col>
                   </Row>
                 
               </Container>
               
               
           </Jumbotron>
        );
    }
}

export default Hero;
