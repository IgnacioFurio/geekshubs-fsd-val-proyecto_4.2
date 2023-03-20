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

export const Appointments = () => {

    //HOOKS
    const [appointments, setAppointments] = useState([]);

    const patientDataRdx = useSelector(userData);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    //USEEFFECT
    useEffect(() => {
        console.log(patientDataRdx);
    });
    return (
        <>
            <ProfileNavigator/>
            <Container>

            </Container>
        </>
    );
};
