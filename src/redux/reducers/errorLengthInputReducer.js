const initialState = {
  inputError: "",
};

const errorLengthInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_ERROR": {
      return {
        inputError: action.payload,
      };
    }
    default:
      return state;
  }
};
export default errorLengthInputReducer