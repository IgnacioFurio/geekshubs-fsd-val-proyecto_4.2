import React, { useState, useEffect } from 'react';
// apicall
import { getDoctorAppointment } from '../../services/apiCalls';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { appointmentData } from '../Slices/appointmentSlice';
import { userData } from '../Slices/userSlice';
// render
import { AppointmentsDoctorInfo } from '../../common/AppointmentsDoctorInfo/AppointmentsDoctorInfo';

export const DoctorAppointments = () => {

    //HOOKS
    const [doctorData, setDoctorData] = useState([]);

    const doctorDataRdx = useSelector(userData);

    // const appointmentRdx = useSelector(appointmentData);
    
    // USEEFFECT
    useEffect(() => {

        if(doctorData.length === 0){

            getDoctorAppointment(doctorDataRdx.userCredentials.token)
            .then(
                result => {
                    setDoctorData(result.data.data)
                    }
                )
                .catch(error => console.log(error))
        };

    }, [doctorData]);

    useEffect(() => {
        console.log(doctorData[0].Appointments);
    });

    return (
        <>
            {doctorData[0].Appointments.map(data => {<AppointmentsDoctorInfo key={data.id} data={data}/>})}
        </>
    );
};
