export const gradientsReducer = (state, action) => {
  // FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE
  switch (action) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
        error: "",
      }
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        gradients: action.payload,
      }
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
            error: action.payload,
        }
    default:
      throw new Error(`Unsupported action type ${action.type} in gradientsReducer`)
  }
}