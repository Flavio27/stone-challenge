export const screenReducer = (state, action) => {
  switch (action.type) {
    case "START":
      return action.payload
    case "CHANGE_TO_LIST":
      const goToList = { ...state }
      goToList.list = !!action.payload;
      goToList.map.screen = action.payload;
      return goToList
    case "ACTIVE_FILTER_PIN_CLIENT":
      const activeClientPin = { ...state }
      activeClientPin.filter.clients = action.payload;
      return activeClientPin
    default:
      return state
  }
}