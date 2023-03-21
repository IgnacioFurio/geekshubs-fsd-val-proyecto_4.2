import React, { useState, useEffect } from 'react';
//apicall
import { getUserProfile } from '../../services/apiCalls';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../Slices/userSlice';
//render
import { ProfileNavigator } from '../../common/ProfileNavigator/ProfileNavigator';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './User.css';

export const User = () => {

    const dataRdx = useSelector(userData)

    //HOOKS
    const [ userCredentials, setUserCredentials] = useState([]);

    // USEEFFECT 
    useEffect(() => {
        if(userCredentials.length === 0){
            
            getUserProfile(dataRdx.userCredentials.token)
            .then(
                result => {
                    setUserCredentials(result)
                }
                )
                .catch(error => console.log(error));
            };

    },[userCredentials]);


    useEffect(() => {
        console.log(userCredentials.data.data.user_name);
    })

    return (
        <Container fluid>
            <Row>
                <ProfileNavigator />
            </Row>
            <Row>
                <Col xs={1}></Col>
                <Col xs={10}>{userCredentials.data.data.user_name}</Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    );
};
