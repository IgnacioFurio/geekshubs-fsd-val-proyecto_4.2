import React, { useState, useEffect } from 'react'
//render
import { InputType } from '../../common/InputType/InputType';
import { ButtonSubmit } from '../../common/ButtonSubmit/ButtonSubmit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const CreatePatient = () => {

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
            allergyValid: false,
            surgeryValid: false
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

    const [submitActive, setSubmitActive] = useState(false);

    //FUNCTIONS 

    const createNewPatient = () => {
        console.log('hello world');
    };

    return (
        <Container>
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
                        placeholder={'Maximus'}
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
                        placeholder={'1991-12-12'}
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
                        placeholder={'none know'}
                        required={true}
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
                        placeholder={'molar extraction'}
                        required={true}
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
                            submitActive ? () => createNewPatient() : () => {}
                        }
                    />
                </Col>
                <Col xs={4}></Col>
            </Row>
        </Container>
    );
};
