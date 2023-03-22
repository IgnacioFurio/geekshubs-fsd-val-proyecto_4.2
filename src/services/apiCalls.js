import axios from "axios";

const root = 'https://geekshubs-fsd-val-proyecto41-production.up.railway.app';

export const createUserProfile = async (body) => {

    return await axios.post(`${root}/auth/register`, body)
};

export const userLogin = async (body) => {

    return await axios.post(`${root}/auth/login`, body)
};

export const getUserProfile = async (token) => {

    let config = {
        headers: {
            'Authorization': 'Bearer '+ token,  
        }
    }

    return await axios.get(`${root}/user/profile`, config);

};

export const createPatient = async (body, token) => {

    let config = {
        headers: {
            'Authorization': 'Bearer '+ token,  
        }
    }
    console.log(config);
    return await axios.post(`${root}/patient/new`, body, config)

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

export const deleteAppointment = async (body, token) => {
    console.log(body);
    let config = {
        headers: {
            'Authorization': 'Bearer '+ token,  
        }
    }
    console.log(config);
    return await axios.delete(`${root}/appointment/cancel`, body, config)
};
