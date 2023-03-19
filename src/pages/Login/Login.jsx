import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { login, userData } from '../Slices/userSlice';
//apicall
import { userLogin } from '../../services/apiCalls';
//render
import { InputType } from '../../common/InputType/InputType';
import { ButtonSubmit } from '../../common/ButtonSubmit/ButtonSubmit'
import { validate } from '../../helpers/useful';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Login.css'

export const Login = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const dataRdx = useSelector(userData);

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
    );

    //activate submit button
    const [submitActive, setSubmitActive] = useState(false);

    //welcome message when log in
    const [welcome, setWelcome] = useState("");

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
    //when a component is render
    useEffect(() => {
        console.log(dataRdx.userCredentials.token);
        if(dataRdx.userCredentials.token){
            navigate("/");
        };
    }, []);

    // for every change
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

    const logUser = () => {

        userLogin(inputField)
            .then((backendCall) => {

                let backendData = {
                    token: backendCall.data.data,
                    message: backendCall.data.message,
                    succes: backendCall.data.succes
                };

                dispatch(login({userCredentials: backendData}));

                setWelcome(backendData.message)

                setTimeout(() => {navigate('/')}, 3000)
            })
            .catch((error) => {

                let backendErrorData = {
                    message: error.response.data.message,
                    valid: error.response.succes
                }

                errorInputField.passwordError = backendErrorData.message

                setSubmitActive(false)
            })

    };

    return (
        <Container fluid className='loginDesign'>
            {
                welcome !== "" ? 
                (
                    <Row>
                        <Col xs={1}></Col>
                        <Col xs={10}>{welcome}</Col>
                        <Col xs={1}></Col>
                        
                    </Row>
                ) : (
                    <>
                    <Row>
                        <Col xs={1}></Col>
                        <Col xs={10}>
                            <InputType 
                                className={'inputBasicDesign'}
                                type={'email'}
                                name={'email'}
                                placeholder={'example@email.com'}
                                required={true}
                                error={errorInputField.emailError}
                                changeFunction={(e)=>inputHandler(e)}
                                blurFunction={(e)=>checkError(e)}
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
                                required={true}
                                error={errorInputField.passwordError}
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
                                className={
                                    submitActive ? 'submitDesignPassive submitDesignActive' : 'submitDesignPassive'
                                } 
                                buttonName={'Log In'}
                                clickFunction={() => logUser()}
                                />
                        </Col>
                        <Col xs={4}></Col>
                    </Row>
                    </>
                )
            }
        </Container>
    );
};
