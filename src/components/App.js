import React, { useReducer, useEffect } from "react";
import "../styles/App.css";
import { List } from "./List";
import { initLoadAction, getAppIDInfoAction } from "./actions";
import reducer from "./reducer";
import { SimpleBarChart, SimpleLineChart } from "./SimpleChart";

const initialState = {
  isLoading: false,
  appIDList: [],
  currentAppID: null,
  currentAppData: null,
  appsData: null
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

      <div className="chartHolder">
        <SimpleBarChart
          data={
            state.currentAppData &&
            state.currentAppData.filter(item => item.meanSendingRateKbps.length)
          }
          dataKey="meanSendingRateKbps"
        />
        <SimpleLineChart data={state.appsData} dataKey="avgSendingRate" />
      </div>
    </div>
  );
};

export default App;
