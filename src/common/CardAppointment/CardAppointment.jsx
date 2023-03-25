import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
//render
import { AppointmentsInfo } from '../AppointmentsInfo/AppointmentsInfo';
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CardAppointment.css';

export const CardAppointment = ({dataAppointment}) => {

    const patientAppointments = dataAppointment.Appointments;

    const navigate = useNavigate()

    useEffect(() => {
        console.log(dataAppointment.id);
    });

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
                        return <AppointmentsInfo key={data.id} dataPatient={data}/>
                    }
                )
            }
        </Container>
    );
};
