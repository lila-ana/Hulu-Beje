/* eslint-disable no-unused-vars */

import * as actionTypes from './accountActionTypes';

const initialState = {
    accounts: [],
    authenticated_account: {},
    account_loading:false,
    account_error:null,
}

// =============> USER <============

const userAccountStart = (state) => {
    return {
        ...state,
        account_error:null,
        account_loading:true,
    }
}

const authenticatedUser = (state, action) => {
    return {
        ...state,
        authenticated_account: action.data,
        account_loading:false,
        account_error:null,
    }
}

const userAccountFail = (state, action) => {
    return {
        ...state,
        account_error:action.error,
        account_loading:false,
    }
}

const userAccountGetSuccess = (state, action) => {
    return {
        ...state,
        accounts:action.data,
        account_error:null,
        account_loading:false
    }
}
const userAccountUpdateSuccess = (state, action) => {
    return {
        ...state,
        accounts:action.data,
        account_error:action.error,
        account_loading:false
    }
}

const userAccountDeleteSuccess = (state, action) => {
    return {
        ...state,
        accounts:action.data,
        account_error:null,
        account_loading:false
    }
}

// =============> SUPPLIER <==============

const supplierAccountGetSuccess = (state, action) => {
    return {
        ...state,
        accounts:action.data,
        account_error:null,
        account_loading:false
    }
}
const supplierAccountUpdateSuccess = (state, action) => {
    return {
        ...state,
        accounts:action.data,
        account_error:action.error,
        account_loading:false
    }
}

const supplierAccountDeleteSuccess = (state, action) => {
    return {
        ...state,
        accounts:action.data,
        account_error:null,
        account_loading:false
    }
}

export const accountReducer = (state= initialState, action) => {
    switch (action.type) {
        case actionTypes.ACCOUNT_START:
            return userAccountStart(state, action)
        case actionTypes.AUTHENTICATED_USER:
            return authenticatedUser(state, action)
        case actionTypes.ACCOUNT_FAIL:
            return userAccountFail(state, action)
        case actionTypes.USER_ACCOUNT_GET_SUCCESS:
            return userAccountGetSuccess(state, action)
        case actionTypes.USER_ACCOUNT_UPDATE_SUCCESS:
            return userAccountUpdateSuccess(state, action)
        case actionTypes.USER_ACCOUNT_DELETE_SUCCESS:
            return userAccountDeleteSuccess(state, action)
        case actionTypes.SUPPLIER_ACCOUNT_GET_SUCCESS:
            return supplierAccountGetSuccess(state, action)
        case actionTypes.SUPPLIER_ACCOUNT_UPDATE_SUCCESS:
            return supplierAccountUpdateSuccess(state, action)
        case actionTypes.SUPPLIER_ACCOUNT_DELETE_SUCCESS:
            return supplierAccountDeleteSuccess(state, action)
        
        default:
            return state
    }
}