export const leadReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LEAD":
      let newLeads = { ...state };
      newLeads = action.payload;
      return newLeads;
    case "CONVERT_LEAD":
      let convertLead = { ...state };
      convertLead = action.payload;
      return convertLead;
    default:
      return state;
  }
};
