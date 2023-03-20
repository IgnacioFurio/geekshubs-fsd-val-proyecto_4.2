import React, { useState, useEffect } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../Slices/userSlice';
//render
import { ProfileNavigator } from '../../common/ProfileNavigator/ProfileNavigator';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { getPatientAppointment } from '../../services/apiCalls';
import { CardAppointment } from '../../common/CardAppointment/CardAppointment';

export const Appointments = () => {

    //HOOKS
    const [appointments, setAppointments] = useState([]);

    const patientDataRdx = useSelector(userData);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    //USEEFFECT
    useEffect(() => {

        if(appointments.length === 0){


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
    // console.log(appointments);
});
    return (
        <>
            <ProfileNavigator/>
                {appointments.map(data =>
                        {
                            return <CardAppointment key={data.id} dataAppointment={data}/>
                        }
                    )
                }
        </>
    );
};
