import React, { useState, useEffect  } from 'react';
//apicall
import { getDoctorData } from '../../services/apiCalls';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../../pages/Slices/userSlice';


export const Select = () => {

    const userRdx = useSelector(userData);

    //HOOKS
    //set all the doctors data
    const [doctorsData, setDoctorsData] = useState([]);

    //set selected doctor
    const [doctorId, setDoctorId] = useState(
        {
            selectedDoctor: ""
        }
    );

    // INPUTHANDLER
    //set doctor id of doctor selected
    const doctorSelected = (e) => {

        setDoctorId((prevState)=>(
                {
                    ...prevState,
                    [e.target.name]: e.target.value
                }
            )
        );
    };

    // USEEFFECT
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

    useEffect(() => {
        
        
    }, [doctorId]);

    //FUNCTIONS


    return (
        <>
        {
            doctorsData.length === 0 ? (
                <></>
            ) : (
                <>
                    <select name={'selectedDoctor'} onChange={(e) => doctorSelected(e)}>
                        <option value="default">----------</option>
                        {doctorsData.map(data => {return <option  key={data.id} name="selectedDoctor" value={data.id}>{data.name} {data.surname}</option>})}
                    </select>
                </>
            )
        }
        </>
    )
};
