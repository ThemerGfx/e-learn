const initState = {
    allFormations: [],
    formationItem: {}
  }
  
  const formationReducer = (state = initState, action) => {

    if (action.type === "GET_ALL_FORMATIONS_SUCCESS"){
      return {
        ...state,
        allFormations: action.payload
      }
    }
    if (action.type === "EDIT_FORMATION_ITEM") {
      return {
        ...state,
        formationItem: action.formation
      }
    }
    if (action.type === "REMOVE_FORMATION") {
      const {_id} = action.payload
      return {
        allFormations : [...state.allFormations].filter((item) => item._id !== _id)
      }
    }
    
    return state
}
  
export default formationReducer
  