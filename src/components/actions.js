export const initLoadAction = dispatch => {
  dispatch({ type: "LIST_LOAD" });

  fetch("https://fathomless-island-89335.herokuapp.com/app")
    .then(response => response.json())
    .then(data => dispatch({ type: "LIST_LOADED", data }));

  fetch("https://fathomless-island-89335.herokuapp.com/rates")
    .then(response => response.json())
    .then(data => dispatch({ type: "APPS_INFO_LOADED", data }));
};

export const getAppIDInfoAction = (dispatch, id) => {
  dispatch({ type: "LOAD_APPID_INFO", data: id.toString() });

  fetch(`https://fathomless-island-89335.herokuapp.com/app/${id}`)
    .then(response => response.json())
    .then(data => dispatch({ type: "APPID_INFO_LOADED", data }));
};
