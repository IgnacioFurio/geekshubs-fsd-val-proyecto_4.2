import React, { useState, useEffect } from 'react'
//render
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ListGroup } from 'react-bootstrap';
import { AppointmentsInfo } from '../AppointmentsInfo/AppointmentsInfo';
import './CardAppointment.css';

export const CardAppointment = ({dataAppointment}) => {

    const patientAppointments = dataAppointment.Appointments;

    // console.log(dataAppointment);
    return (
        <Container fluid className='cardAppointmentDesign'>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4}>Patient:</Col>
                <Col xs= {6}>{dataAppointment.name} {dataAppointment.surname}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4}>DNI:</Col>
                <Col xs= {6}>{dataAppointment.DNI}</Col>
                <Col xs= {1}></Col>
            </Row>
            <Row>
                <Col xs= {1}></Col>
                <Col xs= {4}>Appointments:</Col>
                <Col xs= {6}></Col>
                <Col xs= {1}></Col>
                </Row>
            {
                patientAppointments.map(data => 
                    {
                        return <AppointmentsInfo key={data.DNI} dataPatient={data}/>
                    }
                    )
                }
        </Container>
    );
};
