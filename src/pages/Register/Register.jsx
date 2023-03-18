import React, {useState, useEffect} from 'react';
import { InputType } from '../../common/InputType/InputType';
import { Login } from '../Login/Login';
import { validate } from '../../helpers/useful';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Register.css';

export const Register = () => {

  //HOOKS

  //set data for the new register
  const [newRegister, setNewRegister] = useState(
    {
      user: '',
      email: '',
      password: '',
      password2: ''
    }
  );

    //validate the value inside the inputs
    const [validInputField, setValidInputfield] = useState(
      {
        userValid: false,
        emailValid: false,
        passwordValid: false,
        password2Valid: false
      }
  );

  //error messages if something is wrong inside the inputs
  const [errorInputField, setErrorInputField] = useState(
      {
        userError: '',
        emailError: '',
        passwordError: '',
        password2Error: ''
      }
  )

  // HANDLER 
  const inputHandler = (e) => {
        
    setNewRegister((prevState)=>(
            {
              ...prevState,
              [e.target.name]: e.target.value
            }
        )
    );
};

  // USEEFFECT
  useEffect(() => {
    console.log(newRegister.password);
    console.log(errorInputField.passwordError);
    console.log(validInputField.passwordValid);
    console.log(newRegister.password2);
    console.log(errorInputField.password2Error);
    console.log(validInputField.password2Valid);
  })

  // FUNCTIONS
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
        
    //confirm password
    if( newRegister.password2 !== newRegister.password ){

      errorInputField.password2Error = "The passwords do not match."
      validInputField.password2Valid = false

      return;

    } else if (newRegister.password2 === newRegister.password) {

      errorInputField.password2Error = ""
      validInputField.password2Valid = true

      return;

    };
  };


  return (
    <Container fluid className='registerDesign'>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}>
        <InputType 
                        className={'inputBasicDesign'}
                        type={'text'}
                        name={'user'}
                        placeholder={'Eddieden06'}
                        required={true}
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
                        changeFunction={(e)=>inputHandler(e)}
                        blurFunction={(e)=>checkError(e)}
                    />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Container>
  );
};
