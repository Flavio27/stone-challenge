export const screenReducer = (state, action) => {
  switch (action.type) {
    case "START":
      return action.payload;
    //FilterPinBar
    case "ACTIVE_FILTER_PIN_SCRIPT":
      const activeScriptPin = { ...state };
      activeScriptPin.filter.script = action.payload;
      return activeScriptPin;
    case "ACTIVE_FILTER_PIN_LEAD":
      const activeLeadPin = { ...state };
      activeLeadPin.filter.leads = action.payload;
      return activeLeadPin;
    case "ACTIVE_FILTER_PIN_CLIENT":
      const activeClientPin = { ...state };
      activeClientPin.filter.clients = action.payload;
      return activeClientPin;
    // At click to add a new lead
    case "ACTIVE_CLICK_ON":
      const activeClickOn = { ...state };
      activeClickOn.newLead.clickOn = action.payload;
      return activeClickOn;
    // When click out of polyne area
    case "ACTIVE_CLICK_OUT":
      const activeClickOu = { ...state };
      activeClickOu.newLead.clickOut = action.payload;
      return activeClickOu;
    // Use to show modal of new pin
    case "ADD_NEW_PIN":
      const addNewpint = { ...state };
      addNewpint.newLead.screen = action.payload;
      return addNewpint;
    // Use for get a addres when click on the map
    case "PUSH_ADDRESS":
      const pushAddres = { ...state };
      pushAddres.newLead.address = action.payload.address;
      pushAddres.newLead.position = action.payload.position;
      return pushAddres;
    // When click on the funnel in the bottomBar
    case "ACTIVE_FUNNEL":
      const activeFunnel = { ...state };
      activeFunnel.funnel = action.payload;
      return activeFunnel;
    // Alerts for register, edit, delet or save
    case "ACTIVE_ALERT_SIGNUP":
      const activeAlertSignup = { ...state };
      activeAlertSignup.alert.signup = action.payload;
      activeAlertSignup.alert.status = action.payload;
      return activeAlertSignup;
    case "ACTIVE_ALERT_EDIT":
      const activeAlertEdit = { ...state };
      activeAlertEdit.alert.edit = action.payload;
      activeAlertEdit.alert.status = action.payload;
      return activeAlertEdit;
    case "ACTIVE_ALERT_DELET":
      const activeAlertDelet = { ...state };
      activeAlertDelet.alert.delet = action.payload;
      activeAlertDelet.alert.status = action.payload;
      return activeAlertDelet;
    case "ACTIVE_ALERT_SAVE":
      const activeAlertSave = { ...state };
      activeAlertSave.alert.script = action.payload;
      activeAlertSave.alert.status = action.payload;
      return activeAlertSave;
    // When focus/blur a search bar
    case "ACTIVE_SEARCH":
      const activeSearch = { ...state };
      activeSearch.searchBar.active = action.payload;
      return activeSearch;
     // Pass value of searchbar from /list
    case "SEARCH_VALUE_LIST":
      const searchValueList = { ...state };
      searchValueList.searchBar.list.value = action.payload;
      return searchValueList;
     // Pass value of searchbar from /roteiro
    case "SEARCH_VALUE_SCRIPT":
      const searchValueScript = { ...state };
      searchValueScript.searchBar.script.value = action.payload;
      return searchValueScript;
     // Array of clients of scriptWalk
    case "SCRIPT_LIST":
      const scriptList = { ...state };
      scriptList.script.filtredList = action.payload;
      return scriptList;
    default:
      return state;
  }
};
