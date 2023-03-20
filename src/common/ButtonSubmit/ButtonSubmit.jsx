import React from 'react'
import './ButtonSubmit.css'

export const ButtonSubmit = ({className, buttonName, clickFunction}) => {

    return (
        <div className={className} onClick={clickFunction}>
            {buttonName}
        </div>
    );
};
