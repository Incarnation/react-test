import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  UPDATE_STREAM,
  DELETE_STREAM,
  FETCH_STREAM
} from "./types";
import streams from "../apis/streams";
import history from "../history";

//sign in action
export const signIn = id => {
  return {
    type: SIGN_IN,
    payload: id
  };
};

//sign out action
export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

//create action
export const createStream = values => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post("/streams", { ...values, userId });

    dispatch({ type: CREATE_STREAM, payload: response.data });

    //programatic navigate to the home page after getting the response from API
    history.push("/");
  };
};

//fetch streams action
export const fetchStreams = () => {
  return async dispatch => {
    const response = await streams.get("/streams");

    dispatch({ type: FETCH_STREAMS, payload: response.data });
  };
};

//fetch stream action
export const fetchStream = id => {
  return async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: response.data });
  };
};

//update action
export const updateStream = (id, values) => {
  return async dispatch => {
    const response = await streams.patch(`/streams/${id}`, values);

    dispatch({ type: UPDATE_STREAM, payload: response.data });

    //navigate to main page after dispatching
    history.push("/");
  };
};

//delete action
export const deleteStream = id => {
  return async dispatch => {
    const response = await streams.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id });

    //navigate to main page after dispatching
    history.push("/");
  };
};
