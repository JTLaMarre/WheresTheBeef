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
                <ReportForm/>
            </Container>
            </section>
        );
    }
}

export default Report;
