const axios = require("axios");

export const RegisterUser = async (payload) => {
    try {
        const response = await axiosInstance.post('/users/register', payload);
        return response.data;
    } catch (error) {
        return error.response;
    }
}

export const LoginUser = async (payload)=>{
    try {
       const response = await axiosInstance.post('users/login' , payload)
       return response.data
    } catch (error) {
        return error
    }
 }
 
 export const GetCurrentUser = async () => {
    try {
        const response = await axiosInstance.get("/users/get-current-user");
        return response.data;
    } catch (error) {
        return error;
    }
 }