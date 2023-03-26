import React from 'react';
//render
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CardPatient.css';

export const CardPatient = ({dataPatient}) => {

    return (
        <Container fluid className='cardPatientDesign my-3'>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4} className='borderLeftTopDesign'>Name:</Col>
                <Col xs= {6} className='borderRightTopDesign'>{dataPatient.name}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4} className='borderLeftDesign'>Surname:</Col>
                <Col xs= {6} className='borderRightDesign'>{dataPatient.surname}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4} className='borderLeftDesign'>D.N.I.:</Col>
                <Col xs= {6} className='borderRightDesign'>{dataPatient.DNI}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4} className='borderLeftDesign'>Telephone:</Col>
                <Col xs= {6} className='borderRightDesign'>{dataPatient.phone_number}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4} className='borderLeftDesign'>Post Code:</Col>
                <Col xs= {6} className='borderRightDesign'>{dataPatient.post_code}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4} className='borderLeftDesign'>Birth date:</Col>
                <Col xs= {6} className='borderRightDesign'>{dataPatient.birth}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4} className='borderLeftDesign'>Allergy:</Col>
                <Col xs= {6} className='borderRightDesign'>{dataPatient.allergy}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4} className='borderLeftBottomDesign'>Surgery:</Col>
                <Col xs= {6} className='borderRightBottomDesign'>{dataPatient.surgery}</Col>
                <Col xs= {1}></Col>
            </Row>
        </Container>
    )
};
