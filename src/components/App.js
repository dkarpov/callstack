import React, { useReducer, useEffect } from "react";
import "../styles/App.css";
import { List } from "./List";
import { initLoadAction, getAppIDInfoAction } from "./actions";
import reducer from "./reducer";
import { SimpleBarChart, SimpleLineChart } from "./SimpleChart";

const initialState = {
  isLoading: false,
  appIDList: [],
  currentAppID: "100697065"
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getAppInfo = appID => getAppIDInfoAction(dispatch, appID);

  useEffect(() => {
    initLoadAction(dispatch);
  }, []);

  return (
    <div className="App">
      <List
        list={state.appIDList}
        onSelect={getAppInfo}
        selection={state.currentAppID}
      />
      <SimpleBarChart
        data={
          state.currentAppData &&
          state.currentAppData.filter(item => item.meanSendingRateKbps.length)
        }
      />
    </div>
  );
};

export default App;
