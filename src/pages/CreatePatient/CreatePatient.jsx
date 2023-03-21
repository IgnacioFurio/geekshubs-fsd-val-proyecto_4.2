import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../Slices/userSlice';
// apicall
import { createPatient } from '../../services/apiCalls';
//helper
import { validate } from '../../helpers/useful';
//render
import { InputType } from '../../common/InputType/InputType';
import { ButtonSubmit } from '../../common/ButtonSubmit/ButtonSubmit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const CreatePatient = () => {

    const userRdx = useSelector(userData);
    
    const navigate = useNavigate();

    //HOOKS
    //set data for the new patient
    const [newPatient, setNewPatient] = useState(
        {
            name: "",
            surname: "",
            DNI: "",
            phone_number: "",
            post_code: "",
            birth: "",
            allergy: "",
            surgery: ""
        }
    );

    //validate the value inside the inputs
    const [validInputField, setValidInputfield] = useState(
        {
            nameValid: false,
            surnameValid: false,
            DNIValid: false,
            phone_numberValid: false,
            post_codeValid: false,
            birthValid: false,
            allergyValid: true,
            surgeryValid: true
        }
    );
    //error messages if something is wrong inside the inputs
    const [errorInputField, setErrorInputField] = useState(
        {
            nameError: "",
            surnameError: "",
            DNIError: "",
            phone_numberError: "",
            post_codeError:"",
            birthError: "",
            allergyError: "",
            surgeryError:""
        }
    );

    // new patient activable button
    const [submitActive, setSubmitActive] = useState(false);

    // message when new patient is create
    const [userMessage, setUserMessage] = useState("");

    //HANDLER
    const inputHandler = (e) => {

        setNewPatient((prevState)=>(
                {
                    ...prevState,
                    [e.target.name]: e.target.value
                }
            )
        );

        checkError(e)
    };

    //USEEFFECT

  // USEEFFECT
    useEffect(() => {
        //functions to make submit button activated
        //in case that a field shows an error
        for(let error in errorInputField){
            
            if(errorInputField[error]){
                
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
    
    //in case the data it's full validated
    setSubmitActive(true);
});


    //FUNCTIONS 

    // checkerror function
    const checkError = (e) => {

        let error = "";
    
        let check = validate(
            e.target.name,
            e.target.value,
            e.target.required
            );
            
        error = check.message

        setValidInputfield((prevState) => (
                {
                    ...prevState,
                    [e.target.name + 'Valid']: check.valid
                }
            )
        );
    
        setErrorInputField((prevState) => (
                {
                ...prevState,
                [e.target.name + 'Error']: error
                }
            )
        );
    };

    // create new patient function
    const newPatientCreation = () => {

        createPatient(newPatient, userRdx.userCredentials.token)
            .then((backendCall) => {

                let backendData = {
                    message: backendCall.data.message
                };

                setUserMessage(backendData.message);

                setTimeout(() => {navigate('/profile')}, 2000)
            })
            .catch(error => console.log(error))
    };

    return (
        <Container>
            {
                userMessage !== "" ?
                (
                    <Row>
                    <Col xs={1}></Col>
                    <Col xs={10}>{userMessage}</Col>
                    <Col xs={1}></Col>
                    
                </Row>
                ) : (
                    <>
                    <Row>
                        <Col xs={1}></Col>
                        <Col xs={10}>
                        <InputType 
                                className={'inputBasicDesign'}
                                type={'text'}
                                name={'name'}
                                placeholder={'Traviesus'}
                                required={true}
                                error={errorInputField.nameError}
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
                                type={'text'}
                                name={'surname'}
                                placeholder={'Maximus'}
                                required={true}
                                error={errorInputField.surnameError}
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
                                type={'text'}
                                name={'DNI'}
                                placeholder={'11111111A'}
                                required={true}
                                error={errorInputField.DNIError}
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
                                type={'text'}
                                name={'phone_number'}
                                placeholder={'+34 666 555 444'}
                                required={true}
                                error={errorInputField.phone_numberError}
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
                                type={'number'}
                                name={'post_code'}
                                placeholder={'11011'}
                                required={true}
                                error={errorInputField.post_codeError}
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
                                type={'date'}
                                name={'birth'}
                                placeholder={'yyyy-mm-dd'}
                                required={true}
                                error={errorInputField.birthError}
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
                                type={'text'}
                                name={'allergy'}
                                placeholder={'Type your allergies here (egg: nikel)'}
                                required={false}
                                error={errorInputField.allergyError}
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
                                type={'text'}
                                name={'surgery'}
                                placeholder={'Type your previous interventions here'}
                                required={false}
                                error={errorInputField.surgeryError}
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
                                buttonName={'New Patient'}
                                clickFunction={
                                    submitActive ? () => newPatientCreation() : () => {}
                                }
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
