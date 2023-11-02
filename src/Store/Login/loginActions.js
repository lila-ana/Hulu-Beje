import axios from 'axios';
import * as actionTypes from "./loginActionTypes";
import { API_BASE_URL } from '../../Config/URLs/Endpoint';

const userLogin = () => {
    return {
        type: actionTypes.USER_LOGIN,
    }
}

const userLoggedInSuccess = (data) => {
    return {
        type: actionTypes.USER_LOGGED_IN_SUCCESS,
        data: data 
    }
}

const userLoginFail = (error) => {
    return {
        type: actionTypes.USER_LOGIN_FAIL,
        error: error
    }
}

export const login = (value ) =>{
      return (dispatch)=>{
          dispatch(userLogin())
          axios({
              url:`${API_BASE_URL}/auth/login`,
              method:'post',
              data: value,
          })
          .then((res)=>{
              console.log("Created Success product" , res.data);
              dispatch(userLoggedInSuccess(res.data))
              window.location.replace('/home')
          })
          .catch((err)=>{
              let error;
              if(err.response){
                  error = err.message +" " +  err.response.data
              } else if(err.request) {
                  error=err.message + "Faild request, Try Again!"
              }
              dispatch(userLoginFail(err))
              
          })
         
      }
  }
  