import React, { useState, useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';
//  redux 
import { useDispatch, useSelector } from 'react-redux';
import { userout, userData } from '../../pages/Slices/userSlice';
import { adminData, roleOut } from '../../pages/Slices/isAdminSlice';
// render 
import { Navigator } from '../Navigator/Navigator';
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import prueba from '../../assets/log-removebg-preview.png'

import './Header.css'


export const Header = () => {

    const dataRdx = useSelector(userData);

    const isAdminRdx = useSelector(adminData)

    const  dispatch = useDispatch();

    const navigate = useNavigate();

    const logOut = () => {
        
        let backendData = {}

        dispatch(userout({userCredentials: backendData}));
        dispatch(roleOut({isAdmin: false}));

        setTimeout(() => {navigate('/')}, 1000)
    };

    return (

        <Navbar bg="primary" expand="lg" className='m-0 p-0'>
            <Container className='headerDesign'>
            <Navbar.Brand onClick={() => navigate('/')}>
                <h5 className='textForm'>Fresh Breath</h5>
            </Navbar.Brand>
            {
                dataRdx.userCredentials.token ? (
                <>
                    <NavDropdown title={dataRdx.userCredentials.user.userName} id="basic-nav-dropdown" className='dropDownDesign'>
                    <NavDropdown.Item onClick={()=>navigate('/profile/user')}>
                        My profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>navigate('/profile')}>
                        My patients
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>navigate('/profile/appointments')}>
                        My appointments
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>navigate('/doctor')}>
                        Doctor info
                    </NavDropdown.Item>
                    {
                        isAdminRdx.isAdmin === true ? (
                        <>
                        <NavDropdown.Item onClick={()=>navigate('/admin')}>
                        Admin info
                        </NavDropdown.Item>
                        </>
                        ) : (
                        <></>
                        )
                    }
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={()=>logOut()}>
                        Log Out
                    </NavDropdown.Item>
                    </NavDropdown>
                </>
                ) : (
                <>
                    <NavDropdown title='Log In' id="basic-nav-dropdown" className='dropDownDesign'>
                    <NavDropdown.Item onClick={()=>navigate('/register')}>
                        Sign Up
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={()=>navigate('/login')}>
                        Sign In
                    </NavDropdown.Item>
                    </NavDropdown>
                </>
                ) 
            }
            </Container>
        </Navbar>
    )
};
