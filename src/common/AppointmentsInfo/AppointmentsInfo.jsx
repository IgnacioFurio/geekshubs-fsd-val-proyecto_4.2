import React, { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../../pages/Slices/userSlice';
// apicall
import { deleteAppointment } from '../../services/apiCalls';
//render
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AppointmentsInfo.css'

export const AppointmentsInfo = ( dataPatient ) => {

    const userRdx = useSelector(userData)

    const navigate = useNavigate()

    // HOOKS
    // keep the id for the appointment
    const [ cancelAppointment, setCancelAppointment ] = useState(
        {
            appointmentId: ""
        }
    );

    const [ confirmDelete, setConfirmDelete] = useState(false);
    const [ cancelMessage, setCancelMessage ] = useState("")

    // USEEFFECT
    useEffect(() => {
        
console.log(cancelAppointment);
    });

    // FUNCTIONS
    const modifyAppointment = () => {
        console.log('Modify appointment');
    };

    //ask for cancelation
    const cancelSelectedAppointment = () => {

        setCancelAppointment(
            {
                appointmentId: dataPatient.dataPatient.id
            }
        );
        
        setConfirmDelete(true)

    };

    //not confirm cancel appointment
    const keepAppointment = () => {

        setConfirmDelete(false)

    };

    //delete appointment
    const confirmCancelAppointment = () => {

        deleteAppointment(cancelAppointment.appointmentId, userRdx.userCredentials.token)
        .then(() => {

            navigate('/profile')
            setTimeout(() => {navigate('/profile/appointments')}, 2000)
        })
        .catch(error => console.log(error));
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
                {
                    confirmDelete ? (
                        <>
                            <Col xs= {12}></Col>
                            <Col xs= {12} className={'text-center pt-3 smText'}>Do you really want to cancel the appointment?</Col>
                            <Col xs= {12}></Col>
                            <Col xs= {3}></Col>
                            <Col xs= {6}><ButtonSubmit className={'submitDesignPassive submitKeepDesing'} buttonName={'Keep it'} clickFunction={() => keepAppointment()} /></Col>
                            <Col xs= {3}></Col>
                            <Col xs= {3}></Col>
                            <Col xs= {6}><ButtonSubmit className={'submitDesignPassive submitDeleteDesing'} buttonName={'Cancel it'} clickFunction={() => confirmCancelAppointment()} /></Col>
                            <Col xs= {3}></Col>
                        </>
                    ) : (
                        <>
                            <Col xs= {1}></Col>
                            <Col xs= {4}><ButtonSubmit className={'submitDesignPassive submitModifyDesing'} buttonName={'Modify'} clickFunction={() => modifyAppointment()} /></Col>
                            <Col xs= {1}></Col>
                            <Col xs= {4}><ButtonSubmit className={'submitDesignPassive submitDeleteDesing'} buttonName={'Cancel'} clickFunction={() => cancelSelectedAppointment()} /></Col>
                            <Col xs= {1}></Col>
                        </>
                    )
                }
                
            </Row>
        </Container>
    )
};
