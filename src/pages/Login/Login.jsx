import React from 'react';
import { InputType } from '../../common/InputType/InputType';
import './Login.css'

export const Login = () => {
    return (
        <div className='loginDesign'>
            <InputType 
                className={'inputBasicDesign'}
                type={'email'}
                name={'email'}
                placeholder={'example@email.com'}
            />
            <InputType 
                className={'inputBasicDesign'}
                type={'password'}
                name={'password'}
                placeholder={'password (egg, 12345)'}
            />
        </div>
    );
};
