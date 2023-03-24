import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Appointments } from '../Appointments/Appointments';
import { CreatePatient } from '../CreatePatient/CreatePatient';
import { DoctorAppointments } from '../DoctorAppointments/DoctorAppointments';
import { DoctorProfile } from '../DoctorProfile/DoctorProfile';
import { Home } from '../Home/Home';
import { Login } from '../Login/Login';
import { Profile } from '../Profile/Profile';
import { Register } from '../Register/REgister';
import { User } from '../User/User';
import { UserCreateAppointment } from '../UserCreateAppointment/UserCreateAppointment';

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
                <Route path='/doctor' element={ <DoctorProfile />} />
                <Route path='/doctor/appointments' element={ <DoctorAppointments />} />
                <Route path='/profile/appointments/new' element={ <UserCreateAppointment/> } />
            </Routes>
        </>
    );
};
