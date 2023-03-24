import React, { useState, useEffect } from 'react';
// apicall
import { getDoctorAppointment } from '../../services/apiCalls';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { appointmentData } from '../Slices/appointmentSlice';
import { userData } from '../Slices/userSlice';
// render
import { AppointmentsDoctorInfo } from '../../common/AppointmentsDoctorInfo/AppointmentsDoctorInfo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const DoctorAppointments = () => {

    //HOOKS
    const [doctorData, setDoctorData] = useState([]);

    // const [ doctorAppointmentsData, setDoctorAppointmentsData] = useState([]);

    const doctorDataRdx = useSelector(userData);

    // const appointmentRdx = useSelector(appointmentData);
    
    // USEEFFECT
    useEffect(() => {

        if(doctorData.length === 0){

            getDoctorAppointment(doctorDataRdx.userCredentials.token)
            .then(
                result => {
                    setDoctorData(result.data.data)

                    // setDoctorAppointmentsData(doctorData[0])
                    }
                )
                .catch(error => console.log(error))
        };

    }, [doctorData]);

    return (
        <>
            {doctorData.length === 0 ? (
                <>
                <div>bring your appointments</div>
            </>
            ) : (
                <>
                {(doctorData[0].Appointments).map(data => 
                        {
                            return <AppointmentsDoctorInfo key={data.id} dataDocAppoint={data}/>
                        }
                        )
                    }
            </>
            )}
        </>
    );
};
