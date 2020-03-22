import axios from 'axios'

let allFormations = []

export const createFormation = (formation) => { 
  return (dispatch) => { 
      axios.post('http://localhost:5000/addone', formation)
        .then((res) => {
          if (res.status === 200) {
              return {
                ...formation,
                allFormations: [...allFormations, {...formation}]
              }
          }
          console.log("formation added success")
        })
        .then(() => {
          dispatch({
            type: "ADD_FORMATION",
            payload: { formation }
          })
        })
        .catch((err) => console.log('error from add: ', err))
    }
}

export const removeFormation = (_id) => {
  return (dispatch) => {
    axios.delete('http://localhost:5000/deleteone/' + _id)
    .then(() => {
      dispatch({
        type: "REMOVE_FORMATION",
        payload: { _id }
      })
    })
    .catch((err) => console.log('error from delete: ',err))
  }
}

export const selectFormation = (formation) => {
  return {
    type: "EDIT_FORMATION_ITEM",
    payload: { formation }
  }
}

export const updateFormation = (formation) => {
  return (dispatch) => {
    axios.put(`http://localhost:5000/modifyone/${formation._id}`, { ...formation })
    .then(() => {
      dispatch({
        type: "UPDATE_FORMATION",
        payload : { formation }
      })
    })
    .catch((err) => console.log(err))
  }
}

export const getAllFormations = () => {
  return (dispatch) => {
    fetch("http://localhost:5000/getall")
    .then((res) => 
      res.json()
    )
    .then((res) => {
      console.log('allFormations:::', res)
      dispatch(getAllFormationsSuccess(res))
      return allFormations
    })
    .catch((err) => console.log("error adding formation: ", err))
  }
}
export const getAllFormationsSuccess = (allFormations) => (
  {
    type:'GET_ALL_FORMATIONS_SUCCESS',
    payload: allFormations
  }
)