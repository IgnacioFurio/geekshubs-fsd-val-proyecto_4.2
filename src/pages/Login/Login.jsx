import React, {useState, useEffect} from 'react';
import { InputType } from '../../common/InputType/InputType';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Login.css'

export const Login = () => {


    const [inputField, setInputField] = useState(
        {
            email: '',
            password: ''
        }
    );

    const inputHandler = (e) => {
        
        setInputField((prevState)=>(
                {
                    ...prevState,
                    [e.target.name]: e.target.value
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
                        changeFunction={(e)=>inputHandler(e)}
                    />
                </Col>
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
                        changeFunction={(e)=>inputHandler(e)}
                    />
                </Col>
                <Col xs={1}></Col>            
            </Row>
        </Container>
    );
};
