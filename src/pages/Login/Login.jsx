import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { login, userData } from '../Slices/userSlice';
import { roleIn } from '../Slices/isAdminSlice';
//apicall
import { getDoctorData, userLogin } from '../../services/apiCalls';
//jwt
import { decodeToken } from 'react-jwt';
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

    //set doctors
    const [doctors, setDoctors] = useState([])

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

        if(dataRdx.userCredentials.token){
            navigate("/");
        };

        if(doctors.length === 0){
            getDoctorData()
                .then(
                    result => {
                        console.log(result.data.data);
                        setDoctors(result.data.data)
                    }
                )
                .catch(error => console.log(error))
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

        console.log(dataRdx?.userCredentials?.user?.userId);
        console.log(doctors[0].user_id);
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

                let decodedToken = decodeToken(backendCall.data.data)

                let backendData = {
                    token: backendCall.data.data,
                    message: backendCall.data.message,
                    succes: backendCall.data.success,
                    user: decodedToken
                };

                dispatch(login({userCredentials: backendData}));

                setWelcome(backendData.message)

                if(backendData.user.roleId === 1 || backendData.user.roleId === 2){
                    dispatch(roleIn({isAdmin: true}));
                } else if (backendData.user.roleId === 3) {
                    dispatch(roleIn({isAdmin: false}));
                };

                
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
