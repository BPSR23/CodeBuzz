import React from "react";
import { useAppContext } from "./AppContext";

const Test = () => {
  const { data } = useAppContext();
  return <div>{data && data.status}</div>;
};

export default Test;
