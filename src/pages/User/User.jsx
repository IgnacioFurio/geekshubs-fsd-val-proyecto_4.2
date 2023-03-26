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


    return (     
            <Container fluid>
                {   
                    userCredentials.length === 0 ? (
                        <></>
                    ) : (
                        <>
                            <Row>
                                <ProfileNavigator />
                            </Row>
                            <Row  className='userProfileDesign my-3'>
                                <Col xs={1}></Col>
                                <Col xs={10} className='py-1 fs-5'>Username:</Col>
                                <Col xs={1}></Col>
                                <Col xs={1}></Col>
                                <Col xs={10} className='py-1'>{userCredentials.data.data.user_name}</Col>
                                <Col xs={1}></Col>
                                <Col xs={1}></Col>
                                <Col xs={10} className='py-1 fs-5'>Email:</Col>
                                <Col xs={1}></Col>
                                <Col xs={1}></Col>
                                <Col xs={10} className='py-1'>{userCredentials.data.data.email}</Col>
                                <Col xs={1}></Col>
                                <Col xs={1}></Col>
                                <Col xs={10} className='py-1 fs-5'>Created at:</Col>
                                <Col xs={1}></Col>
                                <Col xs={1}></Col>
                                <Col xs={10} className='py-1'>{userCredentials.data.data.createdAt}</Col>
                                <Col xs={1}></Col>
                                <Col xs={1}></Col>
                                <Col xs={10} className='py-1 fs-5'>Updated at:</Col>
                                <Col xs={1}></Col>
                                <Col xs={1}></Col>
                                <Col xs={10} className='py-1'>{userCredentials.data.data.updatedAt}</Col>
                                <Col xs={1}></Col>
                            </Row>
                        </>
                    )
                }
            </Container>
    );
};
