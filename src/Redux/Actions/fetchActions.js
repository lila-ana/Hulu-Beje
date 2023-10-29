// fetchActions.js
export const fetchAction = (url, options) => {
    return async (dispatch) => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', error: error.message });
      }
    };
  };
  