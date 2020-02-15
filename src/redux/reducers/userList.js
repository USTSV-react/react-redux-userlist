const initState = { isLoading: false, data: [], err: null };

const userList = (state = initState, action) => {
  switch(action.type) {
    case "GET_LIST_START":
      return {
        ...state,
        isLoading: true
      };
    case "GET_LIST_SUCCESS":
      return {
        ...state,
        data: action.data,
        isLoading: false,
        err: null
      }
    case "GET_LIST_FAIL":
      return {
        ...state,
        isLoading: false,
        err: action.error
      }
    default:
      return state;
  }

};

export default userList;
