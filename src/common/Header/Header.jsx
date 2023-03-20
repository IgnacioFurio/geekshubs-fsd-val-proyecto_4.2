import React, { useState, useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';
//  redux 
import { useDispatch, useSelector } from 'react-redux';
import { userout, userData } from '../../pages/Slices/userSlice';
// render 
import { Navigator } from '../Navigator/Navigator';
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css'

export const Header = () => {

    const dataRdx = useSelector(userData);

    const  dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        // token
        console.log(dataRdx?.userCredentials?.token);
        // user
        console.log(dataRdx?.userCredentials?.user);
        // roleId
        console.log(dataRdx?.userCredentials?.user?.roleId);
    });

    const logOut = () => {
        
        let backendData = {}

        dispatch(userout({userCredentials: backendData}));

        setTimeout(() => {navigate('/')}, 1000)
    };

    return (
    <Container fluid className='headerDesign'>
        {
            dataRdx.userCredentials.token ? (
                <Row>
                    <Col className='headerRouting'>
                        <Navigator className={'headerNavigatorDesign'} route={'Home'} destination={'/'}/>
                        <Navigator className={'headerNavigatorDesign'}  route={'Profile'} destination={'/profile'}/>
                        <Navigator className={'headerNavigatorDesign'}  route={'Register'} destination={'/register'}/>
                        <ButtonSubmit className={'textFormat'} buttonName={'Log Out'} clickFunction={() => logOut()}/>
                    </Col>
                </Row>
            ) : (
                <Row>
                    <Col className='headerRouting'>
                        <Navigator className={'headerNavigatorDesign'}  route={'Home'} destination={'/'}/>
                        <Navigator className={'headerNavigatorDesign'}  route={'Profile'} destination={'/profile'}/>
                        <Navigator className={'headerNavigatorDesign'}  route={'Register'} destination={'/register'}/>
                        <Navigator className={'headerNavigatorDesign'}  route={'Log In'} destination={'/login'}/>
                    </Col>
                </Row>
            )
        }
    </Container>
    )
};
