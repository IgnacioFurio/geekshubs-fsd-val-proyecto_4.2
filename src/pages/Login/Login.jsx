import React, {useState, useEffect} from 'react';
import { InputType } from '../../common/InputType/InputType';
import { ButtonSubmit } from '../../common/ButtonSubmit/ButtonSubmit'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Login.css'
import { validate } from '../../helpers/useful';

export const Login = () => {

    //HOOKS

    const [inputField, setInputField] = useState(
        {
            email: '',
            password: ''
        }
    );

    const [validInputField, setValidInputfield] = useState(
        {
            emailValid: false,
            passworValid: false
        }
    );

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
        console.log(validInputField);
    };

    return (
        <Container fluid className='loginDesign'>
            <Row>
                <Col xs={1}></Col>
                <Col xs={10}>E-mail:</Col>
                <Col xs={1}></Col>
            </Row>
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
                <Col xs={10}>Password:</Col>
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
                <Col xs={4}></Col>
                <Col xs={4}>
                    <ButtonSubmit 
                        className={'submitDesign'} 
                        buttonName={'Log In'}
                    />
                </Col>
                <Col xs={4}></Col>
            </Row>
        </Container>
    );
};
