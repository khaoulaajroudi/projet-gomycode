import axios from "axios";
import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  DELETE_MESSAGE_FAIL,
  GET_MESSAGE,
  GET_MESSAGE_FAIL,
  GET_MESSAGE_SUCCESS,
} from "../Constantes/message";

export const getmessage = () => async (dispatch) => {
  dispatch({ type: GET_MESSAGE });
  try {
    let result = await axios.get("/message/all");
    console.log(result.data.result);
    dispatch({ type: GET_MESSAGE_SUCCESS, payload: result.data.result });
  } catch (error) {
    dispatch({ type: GET_MESSAGE_FAIL, payload: error.data });
    console.log(error);
  }
};
export const addmessage = (newMESSAGE) => async (dispatch) => {
  try {
    let result = axios.post("/message/add", newMESSAGE);
    dispatch({ type: ADD_MESSAGE, payload: "MESSAGE added" });
    dispatch(getmessage());
  } catch (error) {
    dispatch({ type: GET_MESSAGE_FAIL, payload: error.data });
    console.log(error);
  }
};
export const deletemessage =
  ({ id }) =>
  async (dispatch) => {
    try {
      let result = await axios.delete(`/message/${id}`);
      dispatch({ type: DELETE_MESSAGE });
      dispatch(getmessage());
    } catch (error) {
      dispatch({ type: DELETE_MESSAGE_FAIL, payload: error.data });
    }
  };
