import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeaderDetails } from "../features/headerSlice";

const MainHead = ({ children }) => {
  return <div>{children}</div>;
};

export default MainHead;
