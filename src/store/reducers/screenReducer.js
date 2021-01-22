export const screenReducer = (state, action) => {
  switch (action.type) {
    case "START":
      return action.payload
    case "ACTIVE_FILTER_PIN_CLIENT":
      const activeClientPin = { ...state }
      activeClientPin.filter.clients = action.payload;
      return activeClientPin
    case "ACTIVE_FILTER_PIN_LEAD":
      const activeLeadPind = { ...state }
      activeLeadPind.filter.leads = action.payload;
      return activeLeadPind
    case "ACTIVE_CLICK_ON":
      const activeClickOn = { ...state }
      activeClickOn.newLead.clickOn = action.payload;
      return activeClickOn
    case "ADD_NEW_PIN":
      const addNewpint = { ...state }
      addNewpint.newLead.screen = action.payload;
      return addNewpint
    case "PUSH_ADDRESS":
      const pushAddres = { ...state }
      pushAddres.newLead.address = action.payload.address;
      pushAddres.newLead.position = action.payload.position;
      return pushAddres
    case "ACTIVE_FUNNEL":
      const activeFunnel = { ...state }
      activeFunnel.funnel = action.payload;
      return activeFunnel
    case "ACTIVE_ALERT_SIGNUP":
      const activeAlertSignup = { ...state }
      activeAlertSignup.alert.signup = action.payload;
      return activeAlertSignup
    case "ACTIVE_ALERT_EDIT":
      const activeAlertEdit = { ...state }
      activeAlertEdit.alert.edit = action.payload;
      return activeAlertEdit
    case "ACTIVE_ALERT_DELET":
      const activeAlertDelet = { ...state }
      activeAlertDelet.alert.delet = action.payload;
      return activeAlertDelet
    default:
      return state
  }
}