import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navigator.css'

export const Navigator = ({route, destination}) => {

    const navigate = useNavigate();

    return (
        <div className='navigatorDesign' onClick={()=>navigate(destination)}>
            {route}
        </div>
    );
};
