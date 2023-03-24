import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//apicall
import { getPatientAppointment } from '../../services/apiCalls';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { login, userData } from '../Slices/userSlice';
import { appointmentData, appointmentSlice, modify } from '../Slices/appointmentSlice';
//render
import { ProfileNavigator } from '../../common/ProfileNavigator/ProfileNavigator';
import { CardAppointment } from '../../common/CardAppointment/CardAppointment';
import { ButtonSubmit } from '../../common/ButtonSubmit/ButtonSubmit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Appointments = () => {

    //HOOKS
    const [appointments, setAppointments] = useState([]);

    const patientDataRdx = useSelector(userData);

    const appointmentRdx = useSelector(appointmentData)

    const dispatch = useDispatch();

    const navigate = useNavigate()

    //USEEFFECT
    useEffect(() => {

        if(appointments.length === 0){

            dispatch(modify({choosenAppointment: {}}));

            getPatientAppointment(patientDataRdx.userCredentials.token)
            .then(
                result => {
                    setAppointments(result.data.data)
                    }
                )
                .catch(error => console.log(error))
        };

    }, [appointments]);
    
    useEffect(() => {

        if(appointmentRdx?.choosenAppointment?.success){
            setAppointments([]);
        };
    }); 

    // FUNCTIONS 

    return (
        <>
            <ProfileNavigator/>
            <Container fluid>
                <Row>
                    <Col xs={2}></Col>
                    <Col xs={8}>
                        <ButtonSubmit className={'submitDesignPassive submitDesignActive'} buttonName={'New Appointment'} clickFunction={() => navigate('/profile/appointments/new')}/>
                    </Col>
                    <Col xs={2}></Col>
                </Row>
                {appointments.map(data =>
                        {
                            return <CardAppointment key={data.id} dataAppointment={data}/>
                        }
                        )
                    }
            </Container>
        </>
    );
};
