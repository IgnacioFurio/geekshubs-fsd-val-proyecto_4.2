import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CardPatient.css';

export const CardPatient = ({patientName, surname, DNI, phoneNumber, postCode, birth, allergy, surgery}) => {

    return (
        <Container fluid className='cardPatientgitDesign'>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4}>Name:</Col>
                <Col xs= {6}>{patientName}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4}>Surname:</Col>
                <Col xs= {6}>{surname}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4}>D.N.I.:</Col>
                <Col xs= {6}>{DNI}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4}>Telephone:</Col>
                <Col xs= {6}>{phoneNumber}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4}>Post Code:</Col>
                <Col xs= {6}>{postCode}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4}>Birth date:</Col>
                <Col xs= {6}>{birth}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4}>Allergy:</Col>
                <Col xs= {6}>{allergy}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4}>Surgery:</Col>
                <Col xs= {6}>{surgery}</Col>
                <Col xs= {1}></Col>
            </Row>
        </Container>
    )
};
