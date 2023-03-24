import React, { useState, useEffect } from 'react';
// render
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AppointmentsDoctorInfo.css'

export const AppointmentsDoctorInfo = (dataDocAppoint) => {

    useEffect(() => {
        console.log(dataDocAppoint);
    });

    return (
        <>
            <Container fluid className='appointmentsDoctorInfoDesign'>
                <Row  className='py-1'>
                    <Col xs={1}></Col>
                    <Col xs={10}>Appointment information:</Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={3}>Date:</Col>
                    <Col xs={7} className={'smText'}>{dataDocAppoint?.dataDocAppoint.date_time}</Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={3}>Id:</Col>
                    <Col xs={7} className={'smText'}>{dataDocAppoint?.dataDocAppoint.id}</Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={3}>Requested:</Col>
                    <Col xs={7} className={'smText'}>{dataDocAppoint?.dataDocAppoint.createdAt}</Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={3}>Uptdated:</Col>
                    <Col xs={7} className={'smText'}>{dataDocAppoint?.dataDocAppoint.createdAt}</Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={3}>Patient:</Col>
                    <Col xs={7} className={'smText'}>{dataDocAppoint?.dataDocAppoint.Patient.name} {dataDocAppoint?.dataDocAppoint.Patient.surname}</Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={3}>Contact:</Col>
                    <Col xs={7} className={'smText'}>{dataDocAppoint?.dataDocAppoint.Patient.phone_number}</Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={3}>Birth:</Col>
                    <Col xs={7} className={'smText'}>{dataDocAppoint?.dataDocAppoint.Patient.birth}</Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={3}>Allergy:</Col>
                    <Col xs={7} className={'smText'}>{dataDocAppoint?.dataDocAppoint.Patient.allergy}</Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={3}>Surgery:</Col>
                    <Col xs={7} className={'smText'}>{dataDocAppoint?.dataDocAppoint.Patient.surgery}</Col>
                    <Col xs={1}></Col>
                </Row>
            </Container>
        </>
    );
};
