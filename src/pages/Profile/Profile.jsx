import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { showPatient, patientData } from '../Slices/patientSlice';
import { userData } from '../Slices/userSlice';
//apicall
import { getPatientInfo } from '../../services/apiCalls';
//render
import { CardPatient } from '../../common/CardPatient/CardPatient';
import { ProfileNavigator } from '../../common/ProfileNavigator/ProfileNavigator';

export const Profile = () => {

    //HOOKS
    const [patients, setPatients] = useState([]);

    const dataRdx = useSelector(userData);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    //USEEFFECT
    useEffect(() => {

        if(patients.length === 0){

            getPatientInfo(dataRdx.userCredentials.token)
                .then(
                    result => {
                        setPatients(result.data.data[0].Patients)
                    }
                )
                .catch(error => console.log(error));
        };
    },[patients]);

    return (
        <>
            <ProfileNavigator/>
                {patients.map(data => 
                        {
                        return <CardPatient key={data.DNI} dataPatient={data}></CardPatient>
                        }
                    )
                }
        </>
    )
};
