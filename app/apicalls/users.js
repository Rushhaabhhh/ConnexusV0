const axios = require("axios");
const bcrypt = require("bcryptjs");

export const RegisterUser = async (payload) => {
    try {
        const hashPassword = await bcrypt.hash(payload.password, 10);
        payload.password = hashPassword;
        const response = await axiosInstance.post('/users/register', payload);
        return response.data;
    } catch (error) {
        return error.response;
    }
}

export const LoginUser = async (payload)=>{
    try {
       const response = await axiosInstance.post('/users/login' , payload)

        const isPasswordMatch = await bcrypt.compare(payload.password, response.data.password);
        if (!isPasswordMatch) {
            throw new Error('Invalid password');
        }
        return response.data;

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