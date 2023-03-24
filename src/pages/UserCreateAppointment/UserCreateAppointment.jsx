import React, { useState, useEffect  } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../Slices/userSlice';
import { doctorIdData } from '../Slices/selectDoctorSlice';
import { appointmentData } from '../Slices/appointmentSlice';
// render
import { InputType } from '../../common/InputType/InputType';
import { Select } from '../../common/Select/Select';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const UserCreateAppointment = () => {
    
    const userRdx = useSelector(userData);
    const doctorIdRdx = useSelector(doctorIdData);
    const refreshRdx = useSelector(appointmentData);

    const dispatch = useDispatch()

    //HOOKS

    //set data for the new register
    const [newAppointment, setNewAppointment] = useState(
        {
        date_time: '',
        patient_id: '',
        doctor_id: ''
        }
    );

    //validate the value inside the inputs
    const [validInputField, setValidInputfield] = useState(
        {
            date_timeValid: false,
            patient_idValid: false,
            doctor_idValid: false,
        }
    );

  //activate submit button
    const [submitActive, setSubmitActive] = useState(false);

    // HANDLER 
    const inputHandler = (e) => {

        setNewAppointment(
            {
                date_time: "",
                patient_id: userRdx.userCredentials.user.userId,
                doctor_id: ""
            }
        );
        setNewAppointment((prevState)=>(
                {
                ...prevState,
                [e.target.name]: e.target.value
                }
            )
        );

        setValidInputfield((prevState)=>(
                {
                ...prevState,
                [e.target.name + 'Valid']: true
                }
            )
        );
    };

    // USEEFFECT

    useEffect(() => {
        console.log(doctorIdRdx);
        console.log(refreshRdx);
        if(refreshRdx?.choosenAppointment){
            console.log('hello');
            setNewAppointment(
                {
                    date_time: newAppointment.date_time,
                    patient_id: newAppointment.patient_id,
                    doctor_id: doctorIdRdx.choosenDoctor.selectedDoctor
                }
            );
        };
    }, [refreshRdx])

    // FUNCTIONS 
    const checkError = () => {};

    return (
        <>
            <Container>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10}>
                        <InputType 
                            className={'inputBasicDesign'}
                            type={'datetime-local'}
                            name={'date_time'}
                            placeholder={'___'}
                            required={true}
                            error={""}
                            changeFunction={(e)=>inputHandler(e)}
                            blurFunction={(e)=>checkError(e)}
                            />
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10}>
                        <Select />
                    </Col>
                    <Col xs={1}></Col>
                </Row>
            </Container>
        </>
    );
};
