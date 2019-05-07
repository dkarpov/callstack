export default function reducer(state, action) {
  const { data, type } = action;

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
        currentAppID: data,
        currentAppData: null
      };
    case "APPID_INFO_LOADED":
      return {
        ...state,
        isLoading: false,
        currentAppData: data
      };
    case "APPS_INFO_LOADED":
      return {
        ...state,
        isLoading: false,
        appsData: aggregatedAppsData(data, "meanSendingRateKbps")
      };
    default:
      return state;
  }
}

const aggregatedAppsData = (rawData, field) => {
  const reducedApps =
    Array.isArray(rawData) &&
    rawData.reduce((accum, item) => {
      if (accum[item.appID]) {
        accum[item.appID][field].push(item[field]);
      } else {
        accum[item.appID] = {};
        accum[item.appID][field] = [];
      }

      return accum;
    }, {});

  const withAvgSendingRate = Object.keys(reducedApps)
    .map(item => ({
      ...reducedApps[item],
      name: "appID " + item
    }))
    .map(item => ({
      ...item,
      avgSendingRate:
        item[field].reduce(
          (accum, item) => parseFloat(accum) + parseFloat(item)
        ) / item[field].length
    }));

  return withAvgSendingRate;
};
