import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
//redux
import { useDispatch ,useSelector } from 'react-redux';
import { userData } from '../Slices/userSlice';
import { adminData } from '../Slices/isAdminSlice';
//render

export const Admin = () => {

    const userRdx = useSelector(userData);
    const isAdmin = useSelector(adminData)
    const navigate = useNavigate();
    

    // HOOKS
    const [users, setUsers] = useState([]);

    // USESTATE
    useEffect(() => {

        if(isAdmin.isAdmin !== true ){
            navigate('/')
        };
    });

    return (
        <>
        {
            !isAdmin.isAdmin ? (
                // middleware that allows only admin or superadmin
                <></>
            ) : (
                <>hy</>
            )
        }
        </>
    );
};
