const userReducer = (
  state = {
    userData: [],
    loading: false,
    error: false,
  },
  action
) => {
  const { type, payload } = action; //type: hành động của người dùng, payload: data lưu lại hành động của người dùng
  switch (type) {
    case "USER_START":
      return { ...state, loading: true };
    case "USER_SUCCESS":
      return { ...state, userData: payload, loading: false };
    case "USER_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return { ...state }; //...: sẽ copy giá trị hiện tại vào đó
  }
};

export default userReducer;
