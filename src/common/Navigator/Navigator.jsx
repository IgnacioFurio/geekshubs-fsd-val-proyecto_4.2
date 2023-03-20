import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navigator.css'

export const Navigator = ({className, route, destination}) => {

    const navigate = useNavigate();

    return (
        <div className={className} onClick={()=>navigate(destination)}>
            {route}
        </div>
    );
};
