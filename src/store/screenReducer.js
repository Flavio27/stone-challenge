export const screenReducer = (state, action) => {
  switch (action.type) {
    case "START":
      return action.payload
    case "CHANGE_TO_LIST":
      const test = {...state}
      test.list = !!action.payload;
      test.map.screen = action.payload;

      return test
    default:
      return state
  }
}