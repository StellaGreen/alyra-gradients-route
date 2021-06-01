export const gradientsReducer = (state, action) => {
  // FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE, ADD, DELETE
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        gradients: [...state.gradients, action.payload],
        loading: false,
      };
    case "DELETE":
      return {
        ...state,
        gradients: state.gradients.filter((el) => el.id !== action.payload.id),
        loading: false,
      };
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
        error: "",
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        gradients: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      throw new Error(
        `Unsupported action type ${action.type} in gradientsReducer`
      );
  }
};
