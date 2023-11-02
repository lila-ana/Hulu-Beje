import * as actionTypes from './orderActionTypes'

const initialState = {
    orders: [],
    single_order: {},
    order_loading: false,
    order_error: null,
}

const orderStart = (state) =>  {
    return {
        ...state,
        order_loading:true,
        order_error:null,
    }
}

const orderGetSuccess = (state, action) =>  {
    return {
        ...state,
        orders: action.data,
        order_loading:false,
        order_error:null,
    }
}

const orderUpdateSuccess = (state, action) => {
    return {
        ...state,
        orders: action.data,
        order_loading:false,
        order_error:null,
    }
}

const orderDeleteSucess = (state, action) => {
    return {
        ...state,
        orders: action.data,
        order_loading:false,
        order_error:null,
    }
}

const orderFail = (state, action) => {
    return {
        ...state,
        order_loading:false,
        order_error: action.error,
    }
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) { 
        case actionTypes.START_ORDER:
            return orderStart(state);
        case actionTypes.ORDER_GET_SUCCESS:
            return orderGetSuccess(state,action);
        case actionTypes.ORDER_UPDATE_SUCCESS:
            return orderUpdateSuccess(state,action);
        case actionTypes.ORDER_DELETE_SUCCESS:
            return orderDeleteSucess(state,action);
        case actionTypes.ORDER_FAIL:
            return orderFail(state,action);

        default:
            return state;
    }
}