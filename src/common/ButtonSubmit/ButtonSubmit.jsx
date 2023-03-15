import React from 'react'
import './ButtonSubmit.css'

export const ButtonSubmit = ({className, buttonName}) => {

    return (
        <div className={className}>
            <h6>{buttonName}</h6>
        </div>
    );
};
