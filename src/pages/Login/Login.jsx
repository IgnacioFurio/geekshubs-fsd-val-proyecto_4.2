import React, {useState, useEffect} from 'react';
import { InputType } from '../../common/InputType/InputType';
import { ButtonSubmit } from '../../common/ButtonSubmit/ButtonSubmit'
import { validate } from '../../helpers/useful';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Login.css'

export const Login = () => {

    //HOOKS

    //set inputs
    const [inputField, setInputField] = useState(
        {
            email: '',
            password: ''
        }
    );

    //validate the value inside the inputs
    const [validInputField, setValidInputfield] = useState(
        {
            emailValid: false,
            passwordValid: false
        }
    );

    //error messages if something is wrong inside the inputs
    const [errorInputField, setErrorInputField] = useState(
        {
            emailError: "",
            passwordError: ""
        }
    )

    //activate submit button
    const [submitActive, setSubmitActive] = useState(false)

    //HANDLERS

    const inputHandler = (e) => {
        
        setInputField((prevState)=>(
                {
                    ...prevState,
                    [e.target.name]: e.target.value
                }
            )
        );
    };

    //USEEFFECT

    useEffect(() => {

        //functions to make submit button activated
        //in case that a field is empty
        for(let empty in inputField){

            if(inputField[empty] === ""){
                
                setSubmitActive(false);

                return;
            };
        };

        //in case that a field is not valid
        for(let valid in validInputField){

            if(validInputField[valid] === false){

                setSubmitActive(false);
                return;
            };
        };

        //in case that a field shows an error
        for(let error in errorInputField){

            if(errorInputField[error]){

                setSubmitActive(false);
                return;
            };
        };

        //in case the data it's full validated
        setSubmitActive(true);
    });

    //FUNCTIONS

    const checkError = (e) => {

        let error = "";

        let check = validate(
            e.target.name,
            e.target.value,
            e.target.required
        );

        error = check.message

        setValidInputfield((prevState)=> (
                {
                ...prevState,
                [e.target.name + 'Valid']: check.valid
                }
            )
        );
        
        setErrorInputField((prevState)=> (
                {
                ...prevState,
                [e.target.name + 'Error']: check.message
                }
            )
        );
    };

    return (
        <Container fluid className='loginDesign'>
            <Row>
                <Col xs={1}></Col>
                <Col xs={10}>
                    <InputType 
                        className={'inputBasicDesign'}
                        type={'email'}
                        name={'email'}
                        placeholder={'example@email.com'}
                        required={true}
                        changeFunction={(e)=>inputHandler(e)}
                        blurFunction={(e)=>checkError(e)}
                    />
                </Col>
                <Col xs={1}></Col>            
            </Row>
            <Row>
                <Col xs={1}></Col>
                <Col xs={10}>{errorInputField.emailError}</Col>
                <Col xs={1}></Col>
            </Row>
            <Row>
                <Col xs={1}></Col>
                <Col xs={10}>
                    <InputType 
                        className={'inputBasicDesign'}
                        type={'password'}
                        name={'password'}
                        placeholder={'password (egg, 12345)'}
                        required={true}
                        changeFunction={(e)=>inputHandler(e)}
                        blurFunction={(e)=>checkError(e)}
                    />
                </Col>
                <Col xs={1}></Col>            
            </Row>
            <Row>
                <Col xs={1}></Col>
                <Col xs={10}>{errorInputField.passwordError}</Col>
                <Col xs={1}></Col>
            </Row>
            <Row>
                <Col xs={4}></Col>
                <Col xs={4}>
                    <ButtonSubmit 
                        className={
                            submitActive ? 'submitDesignPassive submitDesignActive' : 'submitDesignPassive'
                        } 
                        buttonName={'Log In'}
                    />
                </Col>
                <Col xs={4}></Col>
            </Row>
        </Container>
    );
};
