import React from 'react'
//render
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AppointmentsInfo.css'

export const AppointmentsInfo = ( dataPatient ) => {

    // console.log(dataPatient);
    return (
        <Container fluid className='allInfoDesign'>
            <Row className='appointmentInfoDesign'>
                <Col xs= {1}></Col>
                <Col xs= {4}>Id:</Col>
                <Col xs= {6} className={'smText'}>{dataPatient.dataPatient.id}</Col>
                <Col xs= {1}></Col>
                <Col xs= {1}></Col>
                <Col xs= {4}>Date:</Col>
                <Col xs= {6} className={'smText'}>{dataPatient.dataPatient.date_time}</Col>
                <Col xs= {1}></Col>
                <Col xs= {1}></Col>
                <Col xs= {4}>Doctor:</Col>
                <Col xs= {6} className={'smText'}>{dataPatient.dataPatient.Doctor.name} {dataPatient.dataPatient.Doctor.surname}</Col>
                <Col xs= {1}></Col>
                <Col xs= {1}></Col>
                <Col xs= {4}>Requested:</Col>
                <Col xs= {6} className={'smText'}>{dataPatient.dataPatient.createdAt}</Col>
                <Col xs= {1}></Col>
                <Col xs= {1}></Col>
                <Col xs= {4}>Updated:</Col>
                <Col xs= {6} className={'smText'}>{dataPatient.dataPatient.updatedAt}</Col>
                <Col xs= {1}></Col>
            </Row>
        </Container>
    )
};
