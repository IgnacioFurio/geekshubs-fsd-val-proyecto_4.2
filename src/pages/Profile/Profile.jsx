import React from 'react';
import { CardPatient } from '../../common/CardPatien/CardPatient';

export const Profile = () => {
    return (
        <>
            <CardPatient 
                patientName={'Traviesus'}
                surname={'Maximus'}
                DNI={'000000001A'}
                phoneNumber={"+34 629 946 876"}
                postCode={18057}
                birth={'1987-02-22'}
                allergy={''}
                surgery={''}
            >
            </CardPatient>
        </>
    )
};
