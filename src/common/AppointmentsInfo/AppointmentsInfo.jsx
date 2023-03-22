import React, { useState,useEffect} from 'react'
//render
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AppointmentsInfo.css'
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';

export const AppointmentsInfo = ( dataPatient ) => {

    // HOOKS
    // keep the id for the appointment
    const [ cancelAppointment, setCancelAppointment ] = useState();

    // USEEFFECT
    useEffect(() => {
        console.log(cancelAppointment);
    }, [cancelAppointment]);

    // FUNCTIONS
    const modifyAppointment = () => {
        console.log('Modify appointment');
    };

    const deleteAppointment = () => {

        console.log('Delete appointment');

        setCancelAppointment(dataPatient.dataPatient.id)
    };

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
                <Col xs= {1}></Col>
                <Col xs= {4}><ButtonSubmit className={'submitDesignPassive submitModifyDesing'} buttonName={'Modify'} clickFunction={() => modifyAppointment()} /></Col>
                <Col xs= {1}></Col>
                <Col xs= {4}><ButtonSubmit className={'submitDesignPassive submitDeleteDesing'} buttonName={'Delete'} clickFunction={() => deleteAppointment()} /></Col>
                <Col xs= {1}></Col>
            </Row>
        </Container>
    )
};
