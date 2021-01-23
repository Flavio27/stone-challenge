export const leadReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LEAD":
      let newLeads = { ...state };
      newLeads = action.payload;
      return newLeads;
    default:
      return state;
  }
};
