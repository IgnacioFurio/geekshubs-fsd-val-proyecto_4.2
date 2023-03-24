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
            
            console.log(doctorsData);
            
    }, [doctorsData]);

    return (

        <select>
            <option value="default">----------</option>
            {doctorsData.map(data => {return <option value={data.id}>{data.name} {data.surname}</option>})}
        </select>
    );
};
