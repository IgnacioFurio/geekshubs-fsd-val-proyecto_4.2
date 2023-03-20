import React from 'react';
//render
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CardPatient.css';

export const CardPatient = ({dataPatient}) => {

    return (
        <Container fluid className='cardPatientDesign'>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4}>Name:</Col>
                <Col xs= {6}>{dataPatient.name}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4}>Surname:</Col>
                <Col xs= {6}>{dataPatient.surname}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4}>D.N.I.:</Col>
                <Col xs= {6}>{dataPatient.DNI}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4}>Telephone:</Col>
                <Col xs= {6}>{dataPatient.phone_number}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4}>Post Code:</Col>
                <Col xs= {6}>{dataPatient.post_code}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4}>Birth date:</Col>
                <Col xs= {6}>{dataPatient.birth}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4}>Allergy:</Col>
                <Col xs= {6}>{dataPatient.allergy}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4}>Surgery:</Col>
                <Col xs= {6}>{dataPatient.surgery}</Col>
                <Col xs= {1}></Col>
            </Row>
        </Container>
    )
};
