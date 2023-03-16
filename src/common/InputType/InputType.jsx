import React from 'react';
import './InputType.css';

export const InputType = ({className, type, name, placeholder, required, changeFunction, blurFunction}) => {

    const toUpperCaseFirstOnly = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    let upperName = toUpperCaseFirstOnly(name)

    return (
        <>
            <div className='inputName'>{upperName}:</div>
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
