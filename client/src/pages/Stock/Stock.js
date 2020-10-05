import React, { Component } from 'react';
import './Stock.css';
import StockList from '../../components/Stock/stockList';
import {Container, Row} from 'react-bootstrap';
import { Col }from 'react-bootstrap';

class Stock extends Component {
    render() {
        return (
            <section id="stock">
            <Container>
                <Row>
            <Col lg={{ span: 6, offset: 3 }}>
               <h1>Products</h1>
               </Col>
               </Row>
               <Row>
                <StockList/>
               </Row>
                </Container>
            </section>
        );
    }
}

export default Stock;
