import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL = {
  isSignedIn: null,
  userId: null
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
      break;
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
      break;
    default:
      return state;
  }
};
