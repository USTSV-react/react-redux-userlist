const initState = { isLoading: false, data: null, err: null };

const details = (state = initState, action) => {
  switch(action.type) {
    case "GET_DETAILS_START":
      return {
        ...state,
        isLoading: true
      };
    case "GET_DETAILS_SUCCESS":
      return {
        ...state,
        data: action.data,
        isLoading: false,
        err: null
      }
    case "GET_DETAILS_FAIL":
      return {
        ...state,
        isLoading: false,
        err: action.error
      }
    default:
      return state;
  }

};

export default details;
