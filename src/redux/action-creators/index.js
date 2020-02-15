import axios from "axios";

const getUserStart = () => ({
  type: "GET_LIST_START"
});

const getUserSuccess = (res) => ({
  type: "GET_LIST_SUCCESS",
  data: res.data
});

const getUserFail = (err) => ({
  type: "GET_LIST_FAIL",
  error: err
});

const getDetailsStart = () => ({
  type: "GET_DETAILS_START"
});

const getDetailsSuccess = (res) => ({
  type: "GET_DETAILS_SUCCESS",
  data: res.data
});

const getDetailsFail = (err) => ({
  type: "GET_DETAILS_FAIL",
  error: err
});

export const getList = () => {
  return (dispatch) => {
    dispatch(getUserStart());
    axios.get("https://api.github.com/users?per_page=100")
      .then(res => {
        dispatch(getUserSuccess(res));
      })
      .catch(err => {
        dispatch(getUserFail(err));
      })
  };
}

export const getDetails = (id) => {
  return (dispatch) => {
    dispatch(getDetailsStart());
    axios.get(`https://api.github.com/users/${id}`)
      .then(res => {
        dispatch(getDetailsSuccess(res));
      })
      .catch(err => {
        dispatch(getDetailsFail(err));
      })
  };
}
