import * as actionTypes from "../../Store/Accounts/accountActionTypes";

export const getUserAccount = (data) => {
  return {
    type: actionTypes.GET_USER_ACCOUNT,
    data: data
  }
}

export const getUserAccountFail = (error) => {
  return {
    type:actionTypes.GET_USER_ACCOUNT_FAIL,
    error: error
  }
}

export const updateUserAccount = (data) => {
  return {
    type: actionTypes.UPDATE_USER_ACCOUNT,
    data: data,
  }
}

export const updateUserAccountfail = (data) => {
  return {
    type: actionTypes.UPDATE_USER_ACCOUNT_FAIL,
    data: data,
  }
}

export const deleteUserAccount = (data) => {
  return {
    type: actionTypes.DELETE_USER_ACCOUNT,
    data: data,
  }
}

export const deleteUserAccountFail = (error) => {
  return {
    type: actionTypes.DELETE_USER_ACCOUNT_FAIL,
    error: error
  }
}

export const getSupplierAccount = (data) => {
  return {
    type: actionTypes.GET_SUPPLIER_ACCOUNT,
    data: data
  }
}

export const getSupplierAccountFail = (error) => {
  return {
    type:actionTypes.GET_SUPPLIER_ACCOUNT_FAIL,
    error: error
  }
}

export const updateSupplierAccount = (data) => {
  return {
    type: actionTypes.UPDATE_SUPPLIER_ACCOUNT,
    data: data,
  }
}

export const updateSupplierAccountfail = (data) => {
  return {
    type: actionTypes.UPDATE_SUPPLIER_ACCOUNT_FAIL,
    data: data,
  }
}

export const deleteSupplierAccount = (data) => {
  return {
    type: actionTypes.DELETE_SUPPLIER_ACCOUNT,
    data: data,
  }
}

export const deleteSupplierAccountFail = (error) => {
  return {
    type: actionTypes.DELETE_SUPPLIER_ACCOUNT_FAIL,
    error: error
  }
}

