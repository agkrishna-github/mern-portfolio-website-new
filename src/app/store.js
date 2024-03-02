import { configureStore } from "@reduxjs/toolkit";
import HeaderSlice from "../features/headerSlice";
import technologySlice from "../features/technologySlice";
import projectSlice from "../features/projectSlice";
import enquirySlice from "../features/enquirySlice";

export const store = configureStore({
  reducer: {
    header: HeaderSlice,
    technology: technologySlice,
    project: projectSlice,
    enquiry: enquirySlice,
  },
});
