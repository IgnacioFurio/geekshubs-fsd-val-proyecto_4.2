import React from 'react';
import './InputType.css';

export const InputType = ({className, type, name, placeholder, changeFunction}) => {

    return (
        <>
            <input 
                className={className}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={(e)=>changeFunction(e)}
            />
        </>
    );
};
