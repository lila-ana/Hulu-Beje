const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  
  const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { 
            ...state, 
            loading: true, 
            error: null };
      case 'FETCH_SUCCESS':
        return { 
            ...state, 
            loading: false, 
            data: action.payload };
      case 'FETCH_FAILURE':
        return { 
            ...state, 
            loading: false, 
            error: action.error };
      default:
        return state;
    }
  };
  
  export default fetchReducer;
  