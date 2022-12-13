import { createSlice } from "@reduxjs/toolkit";
import { slots } from "../../components/Home/importantVars";

const initialState = {
  monday: slots,
  tuesday: slots,
  wednesday: slots,
  thursday: slots,
  friday: slots,
  saturday: slots,
  sunday: slots,
};



export const slotSlice = createSlice({
  name: "slot",
  initialState,
  
  reducers: {
   
    updateSlot: (state, action) => {
      
      state[action.payload.day] = action.payload.slots;
    },
  },
});

export const { updateSlot } = slotSlice.actions;
export default slotSlice.reducer;
