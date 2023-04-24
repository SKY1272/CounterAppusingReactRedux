const intialState = {
  count: 0
};
function reducer(state = intialState, action) {
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...state, count: state.count - 1 };
  } else if (action.type === "RESET") {
    return { ...state, count: (state.count = 0) };
  } else {
    return state;
  }
}
export default reducer;
