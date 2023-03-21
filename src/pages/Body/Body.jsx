import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Appointments } from '../Appointments/Appointments';
import { CreatePatient } from '../CreatePatient/CreatePatient';
import { Home } from '../Home/Home';
import { Login } from '../Login/Login';
import { Profile } from '../Profile/Profile';
import { Register } from '../Register/REgister';
import { User } from '../User/User';

export const Body = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/login' element={ <Login />} />
                <Route path='/register' element={ <Register />} />
                <Route path='/profile' element={ <Profile />} />
                <Route path='/profile/appointments' element={ <Appointments />} />
                <Route path='/profile/patient/newpatient' element={ <CreatePatient />} />
                <Route path='/profile/user' element={ <User />} />
            </Routes>
        </>
    );
};
