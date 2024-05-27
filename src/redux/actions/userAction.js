import * as UserApi from "../../apis/userRequest";

export const getDataUser = () => async (dispatch) => {
  dispatch({ type: "USER_START" }); //load_api
  try {
    const response = await UserApi.getDataUser();
    dispatch({ type: "USER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "USER_FAIL", payload: error.message });
  }
};
