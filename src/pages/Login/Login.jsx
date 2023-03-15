import React, {useState, useEffect} from 'react';
import { InputType } from '../../common/InputType/InputType';
import './Login.css'

export const Login = () => {


    const [validationField, setValidationField] = useState(
        {
            email: '',
            password: ''
        }
    );

    const inputHandler = (e) => {
        
        setValidationField((prevState)=>(
                {
                    ...prevState,
                    [e.target.name]: e.target.value
                }
            )
        );
    };

    return (
        <div className='loginDesign'>
            <InputType 
                className={'inputBasicDesign'}
                type={'email'}
                name={'email'}
                placeholder={'example@email.com'}
                changeFunction={(e)=>inputHandler(e)}
            />
            <InputType 
                className={'inputBasicDesign'}
                type={'password'}
                name={'password'}
                placeholder={'password (egg, 12345)'}
                changeFunction={(e)=>inputHandler(e)}
            />
        </div>
    );
};
