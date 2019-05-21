import jsonPlaceHolder from "../apis/jsonPlaceholder";

export const fetchUsers = () => async (dispatch, getState) => {
  const response = await jsonPlaceHolder.get("/users");
  console.log("fetchUsers", response);

  dispatch({ type: "FETCH_USERS", payload: response.data });
};
