import React, { useState, useEffect } from 'react';
//apicall
import { getPatientAppointment } from '../../services/apiCalls';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../Slices/userSlice';
import { appointmentData, appointmentSlice, modify } from '../Slices/appointmentSlice';
//render
import { ProfileNavigator } from '../../common/ProfileNavigator/ProfileNavigator';
import { CardAppointment } from '../../common/CardAppointment/CardAppointment';

export const Appointments = () => {

    //HOOKS
    const [appointments, setAppointments] = useState([]);

    const patientDataRdx = useSelector(userData);

    const appointmentRdx = useSelector(appointmentData)

    const dispatch = useDispatch();

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
