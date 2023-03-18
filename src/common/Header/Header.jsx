import React from 'react';
import { Navigator } from '../Navigator/Navigator';
import './Header.css'

export const Header = () => {
    return (
    <div className='headerDesign'>
        <Navigator route={'Home'} destination={'/'}/>
        <Navigator route={'Profile'} destination={'/profile'}/>
        <Navigator route={'Register'} destination={'/register'}/>
        <Navigator route={'Login'} destination={'/login'}/>
    </div>
    )
};
