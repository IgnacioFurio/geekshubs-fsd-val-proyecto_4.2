import React, { useState, useEffect } from 'react';

// render
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AppointmentsDoctorInfo.css'

export const AppointmentsDoctorInfo = (data) => {

    useEffect(() => {
        console.log(data);
        
    })
    return (
        <>
            <Container>
                <Row>
                    <Col XS={1}></Col>
                    <Col XS={4}></Col>
                    <Col XS={6}></Col>
                    <Col XS={1}></Col>
                </Row>
            </Container>
        </>
    );
};
