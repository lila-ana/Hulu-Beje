/* eslint-disable no-unused-vars */
import axios from 'axios';
import * as actionTypes from './dashboardActionTypes';
import { API_BASE_URL } from '../../Config/URLs/Endpoint';

const orderHistory = () => {
    return {
        type:actionTypes.ORDER_HISTORY
    }
}
const viewOngoingOrderHistory = (data) => {
    return {
        type: actionTypes.VIEW_ORDER_HISTORY,
        data: data
    }
}
const viewCompletedOrderHistory  = (data) => {
    return {
        type: actionTypes.VIEW_COMPLETED_ORDER_HISTORY,
        data: data
    }
}
const orderHistoryFail = (error) => {
    return {
        type: actionTypes.ORDER_HISTORY_FAIL,
        error: error
    }
}


// ===========> ORDER CRUD <===========

export const getOngoingOrderHistory = () => {
    return(dispatch)=>{
        dispatch(orderHistory())
        axios({
            method: 'get',
            url: `${API_BASE_URL}/orders`
        })
        .then ((res)=>{
            dispatch(viewCompletedOrderHistory(res.data))
        })
        .cath ((err)=> {
            var errorData 
            if (err.reponse != null) {
                errorData = err.reponse.status
            } else {
                errorData = err.message
            }
            dispatch(orderHistoryFail())
        })
    }
}
export const getCompletedOrderHistory = () => {
    return(dispatch)=>{
        dispatch(orderHistory())
        axios({
            method: 'get',
            url: `${API_BASE_URL}/orders`
        })
        .then ((res)=>{
            dispatch(viewOngoingOrderHistory(res.data))
        })
        .cath ((err)=> {
            var errorData 
            if (err.reponse != null) {
                errorData = err.reponse.status
            } else {
                errorData = err.message
            }
            dispatch(orderHistoryFail())
        })
    }
}