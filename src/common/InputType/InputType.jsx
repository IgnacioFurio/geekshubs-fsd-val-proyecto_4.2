import React from 'react';
import './InputType.css';

export const InputType = ({className, type, name, placeholder, required, error, changeFunction, blurFunction}) => {

    // const toUpperCaseFirstOnly = (str) => {
    //     return str.charAt(0).toUpperCase() + str.slice(1);
    // };

    const nameConversor = (name) => {

        let upperName = name.charAt(0).toUpperCase() + name.slice(1);

        let splitUpperName = upperName.split("_")

        let inputName = splitUpperName.join([" "])

        
        if( upperName === "Password2"){
            inputName = 'Confirm Password';
        };

        return inputName;
    };


    return (
        <>
            <div className='inputName'>{nameConversor(name)}:</div>
            <input 
                className={className}
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                onChange={(e)=>changeFunction(e)}
                onBlur={(e)=>blurFunction(e)}
                maxLength={50}
            />
            <div>{error}</div>
        </>
    );
};
