import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  packageSchedule: "",
  packageType: "",
  packageDuration: "",
  adultTravelers: 1,
  childTravelers: 0,
  infantsTravelers: 0,
  dataLength: 1,
  lastItemId: null,
};

const packageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
    setPackageData(state, action) {
      state.packageSchedule = action.payload.packageSchedule;
      state.packageType = action.payload.packageType;
      state.packageDuration = action.payload.packageDuration;
      state.adultTravelers = action.payload.adultTravelers || 1;
      state.childTravelers = action.payload.childTravelers || 0;
      state.infantsTravelers = action.payload.infantsTravelers || 0;
      state.dataLength = action.payload.dataLength || 1;
      state.lastItemId = action.payload.infantsTravelers || null;
    },
  },
});

export const { setPackageData } = packageSlice.actions;
export default packageSlice.reducer;
