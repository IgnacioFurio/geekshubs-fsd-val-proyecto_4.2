import React, { useState, useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';
//  redux 
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../../pages/Slices/userSlice';
// render 
import { Navigator } from '../Navigator/Navigator';
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';
import './Header.css'

export const Header = () => {

    const dataRdx = useSelector(userData);

    const  dispatch = useDispatch();

    useEffect(() => {
        // token
        console.log(dataRdx.userCredentials.token);
        // user
        console.log(dataRdx.userCredentials.user);
        // roleId
        console.log(dataRdx.userCredentials.user.roleID);
    });

    const logOut = () => {
        console.log('hello world');
    };

    return (
    <div className='headerDesign'>
        {
            dataRdx?.userCredentials?.token ? (
                <div className='headerRouting'>
                    <Navigator route={'Home'} destination={'/'}/>
                    <Navigator route={'Profile'} destination={'/profile'}/>
                    <Navigator route={'Register'} destination={'/register'}/>
                    <ButtonSubmit className={'textFormat'} buttonName={'Log Out'} clickFunction={() => logOut()}></ButtonSubmit>
                </div>
            ) : (
                <div className='headerRouting'>
                    <Navigator route={'Home'} destination={'/'}/>
                    <Navigator route={'Profile'} destination={'/profile'}/>
                    <Navigator route={'Register'} destination={'/register'}/>
                    <Navigator route={'Log In'} destination={'/login'}/>
                </div>
            )
        }
    </div>
    )
};
