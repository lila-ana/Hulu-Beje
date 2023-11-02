/* eslint-disable no-unused-vars */
import axios from "axios";
import * as actionTypes from "./accountActionTypes";
import { API_BASE_URL } from "../../Config/URLs/Endpoint";

// =============> USER <==============

const userAccountStart = () => {
    return {
        type:actionTypes.ACCOUNT_START
    }
}

const authenticatedUser = (data) => {
    return {
        type:actionTypes.AUTHENTICATED_USER,
        data: data
    }
}

export const userAccountGetSuccess = (data) => {
    return {
        type: actionTypes.USER_ACCOUNT_GET_SUCCESS,
        data: data
    }
}

export const userAccountUpdateSuccess = (data) => {
    return {
        type: actionTypes.USER_ACCOUNT_UPDATE_SUCCESS,
        data: data
    }
}

export const userAccountDeleteSuccess = (data) => {
    return {
        type: actionTypes.USER_ACCOUNT_DELETE_SUCCESS,
        data: data
    }
}

export const userAccountFail = (error) => {
    return {
        type: actionTypes.ACCOUNT_FAIL,
        error: error
    }
}

// =============> SUPPLIER <==============

export const supplierAccountGetSuccess = (data) => {
    return {
        type: actionTypes.SUPPLIER_ACCOUNT_GET_SUCCESS,
        data: data
    }
}

export const supplierAccountUpdateSuccess = (data) => {
    return {
        type: actionTypes.SUPPLIER_ACCOUNT_GET_SUCCESS,
        data: data
    }
}

export const supplierAccountDeleteSuccess = (error) => {
    return {
        type: actionTypes.SUPPLIER_ACCOUNT_DELETE_SUCCESS,
        error: error
    }
}


// =============> USER CRUD <==============

export const getAuthenticatedUserAccount = (token) => {
    return (dispatch) => {
        dispatch(userAccountStart())
        axios({
            method: 'get',
            url: `${API_BASE_URL}/auth/user`,
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
        .then((res)=>{
            dispatch(authenticatedUser(res.data))
        })
        .catch((err)=>{
            var errorData;
            if (err.reponse != null){
                errorData = err.reponse.status;
            } else {
                errorData = err.message;
            }
            dispatch(userAccountFail(errorData))
        })
    }
}
export const getUserAccount = () => {
    return (dispatch) => {
        dispatch(userAccountStart())
        axios({
            method: 'get',
            url: `${API_BASE_URL}/auth/users`
        })
        .then((res)=>{
            dispatch(userAccountGetSuccess(res.data))
        })
        .catch((err)=>{
            var errorData;
            if (err.reponse != null){
                errorData = err.reponse.status;
            } else {
                errorData = err.message;
            }
            dispatch(userAccountFail(errorData))
        })
    }
}

export const updateUserAccount = (id) => {
    return (dispatch) => {
        dispatch(userAccountStart())
        axios({
            method: 'put',
            url: `${API_BASE_URL}/auth/users/${id}`
        })
        .then((res)=>{
            dispatch(userAccountUpdateSuccess(res.data))
        })
        .catch((err)=>{
            var errorData;
            if (err.reponse != null){
                errorData = err.reponse.status;
            } else {
                errorData = err.message;
            }
            dispatch(userAccountFail(errorData))
        })
    }
}
export const deleteUserAccount = (id) => {
    return (dispatch) => {
        dispatch(userAccountStart())
        axios({
            method: 'delete',
            url: `${API_BASE_URL}/auth/users/${id}`
        })
        .then((res)=>{
            dispatch(userAccountDeleteSuccess(res.data))
        })
        .catch((err)=>{
            var errorData;
            if (err.reponse != null){
                errorData = err.reponse.status;
            } else {
                errorData = err.message;
            }
            dispatch(userAccountFail(errorData))
        })
    }
}

// =============> SUPPLIER CRUD <==============

export const getSupplierAccount = () => {
    return (dispatch)=>{
        dispatch((userAccountStart))
        axios({
            method: 'get',
            url: `${API_BASE_URL}/auth/users`
        })
        .then((res)=>{
            dispatch(supplierAccountGetSuccess(res.data))
        })
        .catch((err)=>{
            var errorData;
            if (err.reponse !=null){
                errorData = err.reponse.status
            } else {
                errorData = err.message
            }
            dispatch(userAccountFail(errorData))
        })
    }
}


export const updateSupplierAccount = (id) => {
    return (dispatch) => {
        dispatch(userAccountStart())
        axios({
            method: 'put',
            url: `${API_BASE_URL}/auth/users/${id}`
        })
        .then((res)=>{
            dispatch(supplierAccountUpdateSuccess(res.data))
        })
        .catch((err)=>{
            var errorData;
            if (err.reponse != null){
                errorData = err.reponse.status;
            } else {
                errorData = err.message;
            }
            dispatch(userAccountFail(errorData))
        })
    }
}
export const deleteSupplierAccount = (id) => {
    return (dispatch) => {
        dispatch(userAccountStart())
        axios({
            method: 'delete',
            url: `${API_BASE_URL}/auth/users/${id}`
        })
        .then((res)=>{
            dispatch(supplierAccountDeleteSuccess(res.data))
        })
        .catch((err)=>{
            var errorData;
            if (err.reponse != null){
                errorData = err.reponse.status;
            } else {
                errorData = err.message;
            }
            dispatch(userAccountFail(errorData))
        })
    }
}



