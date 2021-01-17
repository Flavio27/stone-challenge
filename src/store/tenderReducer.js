export const tenderReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TENDER":
      let newTenders = {...state}
      newTenders = action.payload;
      return newTenders
    default:
      return state
  } 
}