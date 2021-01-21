export const clientReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CLIENT":
      let newClients = {...state}
      newClients = action.payload;
      return newClients
    default:
      return state
  } 
}