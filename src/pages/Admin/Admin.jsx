import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
//redux
import { useDispatch ,useSelector } from 'react-redux';
import { userData } from '../Slices/userSlice';
import { adminData } from '../Slices/isAdminSlice';
import { getAllUser } from '../../services/apiCalls';
import { CardUser } from '../../common/CardUser/CardUser';
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

    useEffect(() => {

        if(users.length === 0){

            getAllUser(userRdx.userCredentials.token)
                .then(
                    result => {
                        setUsers(result.data.data)
                    }
                )
                .catch(error => console.log(error))

        }
    }, [users]);

    return (
        <>
        {users.map(data => 
            {
                return <CardUser dataUser={data}></CardUser>
            }
            )}
        </>
    );
};
