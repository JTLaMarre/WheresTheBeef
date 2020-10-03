import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap'; 
import ReportForm from '../../components/ReportForm/ReportForm';
import './Report.css';
class Report extends Component {
    render() {
        return (
            <section id="report">
            <Container>
            <Row>
            <Col lg={{ span: 11, offset: 1 }}>
               <h1>Report Products</h1>
               </Col>
               </Row>
                <ReportForm/>
            </Container>
            </section>
        );
    }
}

export default Report;
