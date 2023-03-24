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

export const getDoctorAppointment = async (token) => {

    let config = {
        headers: {
            'Authorization': 'Bearer '+ token,  
        }
    }

    return await axios.get(`${root}/doctor/appointment/`, config);
};

export const getPatientAppointment = async (token) => {

    let config = {
        headers: {
            'Authorization': 'Bearer '+ token,  
        }
    }

    return await axios.get(`${root}/patient/appointment/`, config)
};

export const createAppointment = async (body, token) => {

    let config = {
        headers: {
            'Authorization': 'Bearer '+ token,  
        }
    }

    return await axios.post(`${root}/appointment/new`, body, config)
};

export const updateAppointment = async (body, token) => {

    let config = {
        headers: {
            'Authorization': 'Bearer '+ token,  
        }
    }

    return await axios.put(`${root}/appointment/modify`, body, config)
};

export const deleteAppointment = async (body, token) => {

    const headers = {
        'Authorization': 'Bearer ' + token
    }
    const data = {
        appointmentId : body
    }
    return await axios.delete(`${root}/appointment/cancel`, {headers, data})
};
