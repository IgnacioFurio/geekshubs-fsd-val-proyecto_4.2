import React, { useState, useEffect } from 'react';
// render
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AppointmentsDoctorInfo.css'

export const AppointmentsDoctorInfo = (dataDocAppoint) => {

    return (
        <>
            <Container fluid className='my-3'>
                <Row  className=''>
                    <Col xs={1}></Col>
                    <Col xs={10} className='borderLeftTopDesign borderRightTopDesign borderBottomDesign fs-4'>Appointment information:</Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={3} className='borderLeftDesign'>Date:</Col>
                    <Col xs={7} className={'borderRightDesign smText'}>{dataDocAppoint?.dataDocAppoint.date_time}</Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={3} className='borderLeftDesign'>Id:</Col>
                    <Col xs={7} className={'borderRightDesign smText'}>{dataDocAppoint?.dataDocAppoint.id}</Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={3} className='borderLeftDesign'>Requested:</Col>
                    <Col xs={7} className={'borderRightDesign smText'}>{dataDocAppoint?.dataDocAppoint.createdAt}</Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={3} className='borderLeftDesign'>Uptdated:</Col>
                    <Col xs={7} className={'borderRightDesign smText'}>{dataDocAppoint?.dataDocAppoint.createdAt}</Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={3} className='borderLeftDesign'>Patient:</Col>
                    <Col xs={7} className={'borderRightDesign smText'}>{dataDocAppoint?.dataDocAppoint.Patient.name} {dataDocAppoint?.dataDocAppoint.Patient.surname}</Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={3} className='borderLeftDesign'>Contact:</Col>
                    <Col xs={7} className={'borderRightDesign smText'}>{dataDocAppoint?.dataDocAppoint.Patient.phone_number}</Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={3} className='borderLeftDesign'>Birth:</Col>
                    <Col xs={7} className={'borderRightDesign smText'}>{dataDocAppoint?.dataDocAppoint.Patient.birth}</Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={3} className='borderLeftDesign'>Allergy:</Col>
                    <Col xs={7} className={'borderRightDesign smText'}>{dataDocAppoint?.dataDocAppoint.Patient.allergy}</Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={3} className='borderLeftBottomDesign'>Surgery:</Col>
                    <Col xs={7} className={'borderRightBottomDesign smText'}>{dataDocAppoint?.dataDocAppoint.Patient.surgery}</Col>
                    <Col xs={1}></Col>
                </Row>
            </Container>
        </>
    );
};
