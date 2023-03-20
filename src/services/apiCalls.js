import axios from "axios";

const root = 'http://localhost:3000';

export const createUserProfile = async (body) => {

    return await axios.post(`${root}/auth/register`, body)
};

export const userLogin = async (body) => {

    return await axios.post(`${root}/auth/login`, body)
};

export const getPatientInfo = async (token) => {

    let config = {
        headers: {
            'Authorization': 'Bearer '+ token,  
        }
    }

    return await axios.get(`${root}/patient/profile`, config);
};

export const getPatientAppointment = async (token) => {

    let config = {
        headers: {
            'Authorization': 'Bearer '+ token,  
        }
    }

    return await axios.get(`${root}/patient/appointment/`, config)
};