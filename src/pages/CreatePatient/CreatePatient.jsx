import React, { useState, useEffect } from 'react'
//render
import { InputType } from '../../common/InputType/InputType';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const CreatePatient = () => {

    //HOOKS
    const [errorInputField, setErrorInputField] = useState(
        {
            nameError: ""
        }
    );

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
                        error={errorInputField.nameError}
                        changeFunction={(e)=>inputHandler(e)}
                        blurFunction={(e)=>checkError(e)}
                    />
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    );
};
