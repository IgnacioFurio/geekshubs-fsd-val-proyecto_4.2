import React, { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../../pages/Slices/userSlice';
import { appointmentData, modify } from '../../pages/Slices/appointmentSlice';
//apicall
import { deleteAppointment, updateAppointment } from '../../services/apiCalls';
//render
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AppointmentsInfo.css'

export const AppointmentsInfo = ( dataPatient ) => {

    const userRdx = useSelector(userData)
    const appointmentRdx = useSelector(appointmentData)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    // HOOKS
    //keep the id and date for the updateAppointment
    const [ modifyAppointment, setModifyAppointment ] = useState(
        {
            appointmentId: "",
            newDate: ""
        }
    );

    // keep the id for the cancelAppointment
    const [ cancelAppointment, setCancelAppointment ] = useState(
        {
            appointmentId: ""
        }
    );

    //setting interface that modify appointemnts
    const [ confirmUpdate, setConfirmUpdate ] = useState(false);

    //setting buttons that delete appointments
    const [ confirmDelete, setConfirmDelete] = useState(false);

    //set backend message
    const [ backendMessage, setBackendMessage ] = useState("")

    // INPUTHANDLER
    const inputHandler = (e) => {
        
        setModifyAppointment((prevState)=>(
                {
                    ...prevState,
                    [e.target.name]: e.target.value
                }
            )
        );
    };
    

    // USEEFFECT
    useEffect(() => {
    });

    // FUNCTIONS
    //ask for modification
    const updateSelectedAppointment = () => {

        setModifyAppointment(
            {
                appointmentId: dataPatient.dataPatient.id
            }
        );

        setConfirmUpdate(true)
    };

    // not update appointment
    const notModifyAppointment = () => {

        setConfirmUpdate(false)

    };

    //update appointment
    const newDataAppointment = () => {

        console.log('Modify appointment');

        updateAppointment(modifyAppointment, userRdx.userCredentials.token)
        .then((backendCall) => {          

            setBackendMessage(backendCall.data.message);

            let backendData = {success: backendCall.data.success}
            
            setTimeout(() => {
            
                dispatch(modify({choosenAppointment: backendData}))
                
                setBackendMessage("");
                
                setConfirmUpdate(false);
                
            }, 2000);
        })
        .catch(error => console.log(error));
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

    //keep appointment instead of cancel
    const keepAppointment = () => {

        setConfirmDelete(false)

        setCancelAppointment({appointmentId: ""});

    };

    //delete appointment
    const confirmCancelAppointment = () => {

        deleteAppointment(cancelAppointment.appointmentId, userRdx.userCredentials.token)
        .then((backendCall) => {

            setBackendMessage(backendCall.data.message);
            
            let backendData = {success: backendCall.data.success};
            
            
            setTimeout(() => {

                dispatch(modify({choosenAppointment: backendData}));
                
                setBackendMessage("");

                setCancelAppointment({appointmentId: ""});

                setConfirmDelete(false)
            }, 2000)
        })
        .catch(error => console.log(error));
    };


    return (
        <Container fluid className='allInfoDesign'>
            {
                backendMessage !== "" ? (
                <>
                    <Row>
                        <Col xs={1}></Col>
                        <Col xs={10} className={'text-center d-flex align-items-center backendMessageBox'}><h1>{backendMessage}</h1></Col>
                        <Col xs={1}></Col>
                        
                    </Row>
                </>
                ) : (
                <>
                    <Row className='appointmentInfoDesign'>
                        <Col xs= {1}></Col>
                        <Col xs= {4}>Id:</Col>
                        <Col xs= {6} className={'smText'}>{dataPatient.dataPatient.id}</Col>
                        <Col xs= {1}></Col>
                        <Col xs= {1}></Col>
                        <Col xs= {4}>Date:</Col>
                        {
                            confirmUpdate ? (
                                    <>
                                        <Col xs={6}>
                                            <input className='smText' type="datetime-local" name='newDate' onChange={(e) => inputHandler(e)}/>
                                        </Col>
                                    </>
                                ) : (
                                    <>
                                        <Col xs= {6} className={'smText'}>{dataPatient.dataPatient.date_time}</Col>                                
                                    </>
                            )
                        }
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
                                    {
                                        confirmUpdate ? (
                                            <>
                                                <Col xs= {12}></Col>
                                                <Col xs= {12} className={'text-center pt-3 smText'}>Do you really want to modify the appointment?</Col>
                                                <Col xs= {12}></Col>
                                                <Col xs= {3}></Col>
                                                <Col xs= {6}><ButtonSubmit className={'submitDesignPassive submitDesignActive'} buttonName={'Yes'} clickFunction={() => newDataAppointment()} /></Col>
                                                <Col xs= {3}></Col>
                                                <Col xs= {3}></Col>
                                                <Col xs= {6}><ButtonSubmit className={'submitDesignPassive submitDeleteDesing'} buttonName={'No'} clickFunction={() => notModifyAppointment()} /></Col>
                                                <Col xs= {3}></Col>
                                            </>
                                        ) : (
                                            <>
                                                <Col xs= {1}></Col>
                                                <Col xs= {4}><ButtonSubmit className={'submitDesignPassive submitModifyDesing'} buttonName={'Modify'} clickFunction={() => updateSelectedAppointment()} /></Col>
                                                <Col xs= {1}></Col>
                                                <Col xs= {4}><ButtonSubmit className={'submitDesignPassive submitDeleteDesing'} buttonName={'Cancel'} clickFunction={() => cancelSelectedAppointment()} /></Col>
                                                <Col xs= {1}></Col>
                                            </>
                                        )
                                    }
                                </>
                                
                            )
                        }                
                    </Row>
                </>
                )
            }
        </Container>
    )
};
