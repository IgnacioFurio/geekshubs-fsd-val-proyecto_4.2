import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { showPatient, patientData } from '../Slices/patientSlice';
import { userData } from '../Slices/userSlice';
//apicall
import { getPatientInfo } from '../../services/apiCalls';
//render
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardPatient } from '../../common/CardPatient/CardPatient';
import { ProfileNavigator } from '../../common/ProfileNavigator/ProfileNavigator';
import { ButtonSubmit } from '../../common/ButtonSubmit/ButtonSubmit';

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

    const newPatient = () => {

        navigate('/profile/patient/newpatient')
    };

    return (
        <Container fluid>
            <Row>
            <ProfileNavigator/>            
            </Row>
            {patients.map(data => 
                        {
                            return <CardPatient key={data.DNI} dataPatient={data}></CardPatient>
                        }
                        )
                    }
            <Row>
                <Col xs={1}></Col>
                <Col xs={10}>
                    <ButtonSubmit className={'submitDesignPassive submitDesignActive'} buttonName={'New Patient'} clickFunction={() => newPatient()}/>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    )
};
