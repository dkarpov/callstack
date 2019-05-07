import React from "react";
import "../styles/App.css";

export const List = React.memo(
  ({ list, onSelect, selection }) => (
    <div className="list">
      <span>Currently slected appID - {selection ? selection : "none"}</span>

      {list &&
        list.map(({ appID }) => (
          <div
            key={appID}
            className={`list-item ${selection === appID && "active-item"}`}
            onClick={() => onSelect(appID)}
          >
            {appID}
          </div>
        ))}
    </div>
  ),
  (prevProps, nextProps) =>
    prevProps.list === nextProps.list &&
    prevProps.selection === nextProps.selection
);
