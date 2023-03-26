import React, { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
//apicall
import { createAppointment, getDoctorData, getPatientInfo } from '../../services/apiCalls';
//redux
import { useSelector } from 'react-redux';
import { userData } from '../Slices/userSlice';
// render
import { InputType } from '../../common/InputType/InputType';
import { Select } from '../../common/Select/Select';
import { ButtonSubmit } from '../../common/ButtonSubmit/ButtonSubmit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { validate } from '../../helpers/useful';

export const UserCreateAppointment = () => {
    
    const userRdx = useSelector(userData);

    const navigate = useNavigate()

    //HOOKS
    const [patientsData, setPatientsData] = useState([]);
    const [doctorsData, setDoctorsData] = useState([]);

    //set data for the new register
    const [newAppointment, setNewAppointment] = useState(
        {
        date_time: '',
        patient_id: '',
        doctor_id: ''
        }
    );

    //set Error for the new register
    const [newAppointmentError, setNewAppointmentError] = useState(
        {
        date_timeError: '',
        patient_idError: '',
        doctor_idError: ''
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

    //set backend message
    const [backendMessage, setBackendMessage] = useState("");

    // HANDLER 
    const inputHandler = (e) => {

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
        //functions to make submit button activated
        //in case that a field is empty
        for(let empty in newAppointment){
        
            if(newAppointment[empty] === "" || newAppointment[empty] === "default"){
    
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
        for(let error in newAppointmentError){
    
            if(newAppointmentError[error]){
                
                setSubmitActive(false);
                return;
            };
        };
        
        //in case the data it's full validated
        setSubmitActive(true);
    });

    useEffect(() => {
        
        if(patientsData.length === 0){
            getPatientInfo(userRdx.userCredentials.token)
            .then(
                result => {
                    setPatientsData(result.data.data[0].Patients)
                    }
                )
                .catch(error => console.log(error));
            };
            
    }, [patientsData]);

    useEffect(() => {
        
        if(doctorsData.length === 0){
            getDoctorData(userRdx.userCredentials.token)
            .then(
                result => {
                    setDoctorsData(result.data.data)
                    }
                )
                .catch(error => console.log(error));
            };
            
    }, [doctorsData]);

    // FUNCTIONS 

    const checkError = (e) => {
        console.log(e.target.value);
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

        setNewAppointmentError((prevState) => (
                {
                ...prevState,
                [e.target.name + 'Error']: error
                }
            )
        );
    };

    const createNewAppointment = () => {

        createAppointment(newAppointment,  userRdx.userCredentials.token)
        .then((backendCall) => {

            setBackendMessage(backendCall.data.message);

            // setUserMessage(backendData.message);

            setTimeout(() => {navigate('/profile/appointments')}, 2000)
        })
        .catch(error => console.log(error));

    };

    return (
        <>
            <Container fluid>
                {
                backendMessage ? (
                    <>
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={10} className={'text-center d-flex align-items-center backendMessageBox'}><h1>{backendMessage}</h1></Col>
                            <Col xs={1}></Col>
                            
                        </Row>
                    </>
                ) : (
                    <>
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
                                    blurFunction={() => {}}
                                    />
                            </Col>
                            <Col xs={1}></Col>
                        </Row>
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={10} className='my-3'>Patient:</Col>
                            <Col xs={1}></Col>
                        </Row>
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={10}>
                                <Select dataMap={patientsData} nameSelect='patient_id' changeFunction={(e)=>inputHandler(e)} blurFunction={(e)=>checkError(e)}/>
                            </Col>
                            <Col xs={1}></Col>
                        </Row>
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={10}>{newAppointmentError.patient_idError}</Col>
                            <Col xs={1}></Col>
                        </Row>
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={10} className='my-3'>Doctor:</Col>
                            <Col xs={1}></Col>
                        </Row>
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={10}>
                                <Select dataMap={doctorsData} nameSelect='doctor_id' changeFunction={(e)=>inputHandler(e)} blurFunction={(e)=>checkError(e)}/>
                            </Col>
                            <Col xs={1}></Col>
                        </Row>
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={10}>{newAppointmentError.doctor_idError}</Col>
                            <Col xs={1}></Col>
                        </Row>
                        <Row>
                            <Col xs={3}></Col>
                            <Col xs={6}>
                                <ButtonSubmit 
                                    className={
                                        submitActive ? 'submitDesignPassive submitDesignActive' : 'submitDesignPassive'
                                    } 
                                    buttonName={'New Appointment'}
                                    clickFunction={
                                        submitActive ? (() => createNewAppointment()) : (() => {})
                                    }
                                    />
                            </Col>
                            <Col xs={3}></Col>
                        </Row>
                    </>
                )
                }                
            </Container>
        </>
    );
};
