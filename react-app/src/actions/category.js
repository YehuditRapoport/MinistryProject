import api from "./api";

export const ACTION_TYPES = {
  FETCH_ALL_Category: "FETCH_ALL_Category",
};



export const fetchAll = () => (dispatch) => {
  // operacije ...
  // get api req
  api.category().fetchAll()
    .then(response => {
       console.log(response)
      dispatch({
        type: ACTION_TYPES.FETCH_ALL_Category,
        payload: response.data,
      })
    })
    .catch((err) => console.log(err));
}

