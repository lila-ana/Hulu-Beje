import * as actionTypes from './registerActionTypes'

const initialState = {
    registered_user: {},
    registration_error: null,
    registration_loading: false,
}

const register = (state) => {
    return {
        ...state,
        registration_error: null,
        registration_loading: true,    
    }
}
const registerSucess = (state, action) => {
    return {
        ...state,
        registered_users: action.data,
        registration_error: null,
        registration_loading: false,    
    }
}
const registerFail = (state, action) => {
    return {
        ...state,
        registration_error: action.error,
        registration_loading: false,    
    }
}


export const registerReducer = ( state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_USER:
            return register (state)
        case actionTypes.REGISTER_USER_SUCCESS:
            return registerSucess (state, action)
        case actionTypes.REGISTER_USER_FAIL:
            return registerFail (state, action)
        
        default:
            return state;
    }
}
