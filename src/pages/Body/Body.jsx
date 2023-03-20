import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Appointments } from '../Appointments/Appointments';
import { Home } from '../Home/Home';
import { Login } from '../Login/Login';
import { Profile } from '../Profile/Profile';
import { Register } from '../Register/REgister';

export const Body = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/login' element={ <Login />} />
                <Route path='/register' element={ <Register />} />
                <Route path='/profile' element={ <Profile />} />
                <Route path='/appointments' element={ <Appointments />} />
            </Routes>
        </>
    );
};
