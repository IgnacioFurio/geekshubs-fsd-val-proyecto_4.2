import React, {useState, useEffect} from 'react';
import { InputType } from '../../common/InputType/InputType';
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
      password: ''
    }
  );

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
                        // changeFunction={(e)=>inputHandler(e)}
                        // blurFunction={(e)=>checkError(e)}
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
                        // changeFunction={(e)=>inputHandler(e)}
                        // blurFunction={(e)=>checkError(e)}
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
                        // changeFunction={(e)=>inputHandler(e)}
                        // blurFunction={(e)=>checkError(e)}
                    />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Container>
  );
};
