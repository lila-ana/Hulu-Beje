import axios from 'axios'
import { API_BASE_URL } from '../../Config/URLs/Endpoint'
import * as actionTypes from './registerActionTypes'

const register = () => {
    return {
        type: actionTypes.REGISTER_USER
    }
}
const registerSuccess = (data) => {
    return {
        type: actionTypes.REGISTER_USER_SUCCESS,
        data: data
    }
}
const registerFail = (error) => {
    return {
        type: actionTypes.REGISTER_USER_FAIL,
        error: error
    }
}

//=========> REGISTER CRUD <========

export const registration = (value) => {
    return (dispatch) => {
        dispatch(register())
        axios({
            method: 'post',
            url: `${API_BASE_URL}/auth/register`,
            data: value,
            header: {
                "content-type" : "application/json"
            }
        })
        .then((res)=> {
            dispatch(registerSuccess(res.data))
            window.location.replace("/login")
        })
        .catch((err)=> {
            let errorData;
            if (err.response != null){
                errorData = err.response.status
            } else {
                errorData = err.message 
            }
            dispatch(registerFail(errorData))
        })
    }
}