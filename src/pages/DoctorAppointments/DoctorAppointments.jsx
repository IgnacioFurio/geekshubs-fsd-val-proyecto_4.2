import React, { useState, useEffect } from 'react';
import { ProfileNavigator } from '../../common/ProfileNavigator/ProfileNavigator';
//apicall
import { getDoctorAppointment } from '../../services/apiCalls';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../Slices/userSlice';
import { appointmentData } from '../Slices/appointmentSlice';
//render
import { CardAppointment } from '../../common/CardAppointment/CardAppointment';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './DoctorAppointments.css';


export const DoctorAppointments = () => {

    //HOOKS
    const [doctorData, setDoctorData] = useState([]);

    const doctorDataRdx = useSelector(userData);

    const appointmentRdx = useSelector(appointmentData)

    const dispatch = useDispatch();
    
    // USEEFFECT
    useEffect(() => {

        if(doctorData.length === 0){

            // dispatch(modify({choosenAppointment: {}}));

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
        // console.log(doctorDataRdx.userCredentials.token);
        console.log(doctorData[0].collegiate_member);
    });

    return (
        <>
            <ProfileNavigator />
            <Container fluid>
                <Row className='py-1'>
                    <Col xs= {1}></Col>
                    <Col xs= {4}>Colegiate nº:</Col>
                    <Col xs= {6} className={'smText'}>{doctorData[0].collegiate_member}</Col>
                    <Col xs= {1}></Col>
                </Row>
                <Row className='py-1'>
                    <Col xs= {1}></Col>
                    <Col xs= {4}>Name:</Col>
                    <Col xs= {6} className={'smText'}>{doctorData[0].name}</Col>
                    <Col xs= {1}></Col>
                </Row>
                <Row className='py-1'>
                    <Col xs= {1}></Col>
                    <Col xs= {4}>Surname:</Col>
                    <Col xs= {6} className={'smText'}>{doctorData[0].surname}</Col>
                    <Col xs= {1}></Col>
                </Row>
                <Row className='py-1'>
                    <Col xs= {1}></Col>
                    <Col xs= {4}>DNI:</Col>
                    <Col xs= {6} className={'smText'}>{doctorData[0].DNI}</Col>
                    <Col xs= {1}></Col>
                </Row>
                <Row className='py-1'>
                    <Col xs= {1}></Col>
                    <Col xs= {4}>Telephone:</Col>
                    <Col xs= {6} className={'smText'}>{doctorData[0].phone_number}</Col>
                    <Col xs= {1}></Col>
                </Row>
                <Row className='py-1'>
                    <Col xs= {1}></Col>
                    <Col xs= {4}>Contract at:</Col>
                    <Col xs= {6} className={'smText'}>{doctorData[0].contract_at}</Col>
                    <Col xs= {1}></Col>
                </Row>
                <Row className='py-1'>
                    <Col xs= {1}></Col>
                    <Col xs= {4}>Contract end:</Col>
                    <Col xs= {6} className={'smText'}>{doctorData[0].contract_until}</Col>
                    <Col xs= {1}></Col>
                </Row>
                <Row className='py-1'>
                    <Col xs= {1}></Col>
                    <Col xs= {4}>Created at:</Col>
                    <Col xs= {6} className={'smText'}>{doctorData[0].createdAt}</Col>
                    <Col xs= {1}></Col>
                </Row>
                <Row className='py-1'>
                    <Col xs= {1}></Col>
                    <Col xs= {4}>Updated at:</Col>
                    <Col xs= {6} className={'smText'}>{doctorData[0].updatedAt}</Col>
                    <Col xs= {1}></Col>
                </Row>
            </Container>
        </>
    );
};
