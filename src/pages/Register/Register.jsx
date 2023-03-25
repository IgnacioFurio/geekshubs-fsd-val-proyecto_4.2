import React, {useState, useEffect} from 'react';
import { Form } from 'react-router-dom';
//helper
import { validate } from '../../helpers/useful';
//apicall
import { createUserProfile } from '../../services/apiCalls';
//render
import { InputType } from '../../common/InputType/InputType';
import { ButtonSubmit } from '../../common/ButtonSubmit/ButtonSubmit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Register.css';
import { FormGroup } from 'react-bootstrap';

export const Register = () => {

  //HOOKS

  //set data for the new register
  const [newRegister, setNewRegister] = useState(
    {
      username: '',
      email: '',
      password: '',
      password2: ''
    }
  );

    //validate the value inside the inputs
    const [validInputField, setValidInputfield] = useState(
      {
        usernameValid: false,
        emailValid: false,
        passwordValid: false,
        password2Valid: false
      }
  );

  //error messages if something is wrong inside the inputs
  const [errorInputField, setErrorInputField] = useState(
      {
        usernameError: '',
        emailError: '',
        passwordError: '',
        password2Error: ''
      }
  );

  //activate submit button
  const [submitActive, setSubmitActive] = useState(false);


  // HANDLER 
  const inputHandler = (e) => {
        
    setNewRegister((prevState)=>(
            {
              ...prevState,
              [e.target.name]: e.target.value
            }
        )
    );

    checkError(e);
};

  // USEEFFECT
  useEffect(() => {
    //functions to make submit button activated
    //in case that a field is empty
    for(let empty in newRegister){
      
      if(newRegister[empty] === ""){

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

  // FUNCTIONS
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

  //confirm password function
  const confirmPass = (e) => {

    if(newRegister.password2 !== newRegister.password && newRegister.password2 !== ""){

      setValidInputfield((prevState) => (
          {
            ...prevState,
            [e.target.name + 'Valid']: false
          }
        )
      );

      setErrorInputField((prevState) => (
          {
            ...prevState,  
            [e.target.name + 'Error']: 'Password and Confirm Password shoud be the same.'
          }
        )
      );

    } else {

      setValidInputfield((prevState) => (
          {
            ...prevState,
            [e.target.name + 'Valid']: true
          }
        )
      );

      setErrorInputField((prevState) => (
          {
            ...prevState,  
            [e.target.name + 'Error']: ''
          }
        )
      );

    };
  }

  //sing up function
  const signUpUser = () => {
    createUserProfile(newRegister)
      .then(() => {})
      .catch(error => {

        let backendErrorData = {
          message: error.response.data.message,
          valid: error.response.succes

      }

      errorInputField.passwordError = backendErrorData.message
      })
  };

  return (
    <Container fluid className='registerDesign'>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}>
          <InputType 
              className={'inputBasicDesign'}
              type={'text'}
              name={'username'}
              placeholder={'Eddieden06'}
              required={true}
              error={errorInputField.usernameError}
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
        <Col xs={1}></Col>
        <Col xs={10}>
          <InputType 
              className={'inputBasicDesign'}
              type={'password'}
              name={'password2'}
              placeholder={'password (egg, 12345)'}
              required={true}
              error={errorInputField.password2Error}
              changeFunction={(e)=>inputHandler(e)}
              blurFunction={(e)=>confirmPass(e)}
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
                  buttonName={'Sign Up'}
                  clickFunction={
                    submitActive ? () => signUpUser() : () => {}
                  }
                  />
          </Col>
          <Col xs={4}></Col>
      </Row>
    </Container>
  );
};
