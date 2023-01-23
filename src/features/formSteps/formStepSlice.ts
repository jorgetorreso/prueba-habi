import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface FormStepState {
  step: number;
  value: number;
  status: "idle" | "loading" | "failed";
  data: {
    [index: string]: number | string;
  };
}

const initialState: FormStepState = {
  step: 1,
  value: 0,
  status: "idle",
  data: {},
};

export const formStepSlice = createSlice({
  name: "formStep",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    setData: (state, action: PayloadAction<{}>) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export const { setStep, setData } = formStepSlice.actions;

export const selectData = (state: RootState) => state.formStep.data;
export const selectStep = (state: RootState) => state.formStep.step;


export default formStepSlice.reducer;
