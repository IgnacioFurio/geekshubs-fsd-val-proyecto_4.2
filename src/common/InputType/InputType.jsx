import React from 'react';
import './InputType.css';

export const InputType = ({className, type, name, placeholder, required, changeFunction, blurFunction}) => {

    return (
        <>
            <input 
                className={className}
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                onChange={(e)=>changeFunction(e)}
                onBlur={(e)=>blurFunction(e)}
            />
        </>
    );
};
