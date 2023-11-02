import { API_BASE_URL } from '../../Config/URLs/Endpoint'
import * as actionTypes from './orderActionTypes'

const orderStart = () => {
    return {
        type: actionTypes.START_ORDER
    }
}

const orderGetSuccess = (data) => {
    return {
        type: actionTypes.ORDER_GET_SUCCESS,
        data: data
    }
}

const orderUpdateSuccess = (data) => {
    return {
        type: actionTypes.ORDER_UPDATE_SUCCESS,
        data: data
    }
}

const orderDeleteSucess = (data) => {
    return {
        type: actionTypes.ORDER_DELETE_SUCCESS,
        data: data
    }
}

const orderFail = (error) => {
    return {
        type: actionTypes.ORDER_FAIL,
        error: error

    }
}

//============> ORDER CRUD <============

export const getOrderList = () => {
    return (dispatch) => {
        dispatch(orderStart())
        axios ({
            method: 'delete',
            url: `${API_BASE_URL}/` 
        })
        .type((res)=> {
            dispatch(orderDeleteSucess(res.data))
        }) 
        .catch ((err)=> {
            var errorData;
            if (err.response !=null) {
                errorData = err.response.status
            } else {
                errorData = err.message;
            }
            dispatch(orderFail(errorData))
        })
    }
}

export const updateOrderList = () => {
    return (dispatch) => {
        dispatch(orderStart())
        axios ({
            method: 'put',
            url: `${API_BASE_URL}/` 
        })
        .type((res)=> {
            dispatch(orderUpdateSuccess(res.data))
        }) 
        .catch ((err)=> {
            var errorData;
            if (err.response !=null) {
                errorData = err.response.status
            } else {
                errorData = err.message;
            }
            dispatch(orderFail(errorData))
        })
    }
}

export const deleteOrderList = () => {
    return (dispatch) => {
        dispatch(orderStart())
        axios ({
            method: 'get',
            url: `${API_BASE_URL}/` 
        })
        .type((res)=> {
            dispatch(orderGetSuccess(res.data))
        }) 
        .catch ((err)=> {
            var errorData;
            if (err.response !=null) {
                errorData = err.response.status
            } else {
                errorData = err.message;
            }
            dispatch(orderFail(errorData))
        })
    }
}