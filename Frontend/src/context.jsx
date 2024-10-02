import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  let orderCache = sessionStorage.getItem("orderby")
    ? sessionStorage.getItem("orderby")
    : "Priority";
  let groupCache = sessionStorage.getItem("groupby")
    ? sessionStorage.getItem("groupby")
    : "Status";
  const [Ordering, setOrdering] = useState(orderCache);
  const [Grouping, setGrouping] = useState(groupCache);
  const [modifiedApiData, setmodifiedApiData] = useState([]);
  const [groupedData, setgroupedData] = useState([]);

  return (
    <Context.Provider
      value={{
        Ordering,
        setOrdering,
        Grouping,
        setGrouping,
        modifiedApiData,
        setmodifiedApiData,
        groupedData,
        setgroupedData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
