import React from 'react';
import { useNavigate } from 'react-router-dom';
//  redux 
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../../pages/Slices/userSlice';
// render 
import { Navigator } from '../Navigator/Navigator';
import './Header.css'

export const Header = () => {

    const dataRdx = useSelector(userData);

    const  dispatch = useDispatch();

    return (
    <div className='headerDesign'>
        <Navigator route={'Home'} destination={'/'}/>
        <Navigator route={'Profile'} destination={'/profile'}/>
        <Navigator route={'Register'} destination={'/register'}/>
        <Navigator route={'Login'} destination={'/login'}/>
    </div>
    )
};
