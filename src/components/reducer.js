export default function reducer(state, action) {
  const { data, type } = action;

  console.log(">>>", action);

  switch (type) {
    case "LIST_LOAD":
      return {
        ...state,
        isLoading: true,
        appIDList: []
      };
    case "LIST_LOADED":
      return {
        ...state,
        isLoading: false,
        appIDList: data
      };
    case "LOAD_APPID_INFO":
      return {
        ...state,
        isLoading: true,
        currentAppID: data
      };
    case "APPID_INFO_LOADED":
      return {
        ...state,
        isLoading: false,
        currentAppData: data
      };
    default:
      return state;
  }
}
