import { createSlice } from '@reduxjs/toolkit';
import { PaidPadButtons, FreePadButtons } from '../../utils/pad-buttons';
import { PadButtonType } from '../../types/pad-buttons';

type UserType = {
  buttons: PadButtonType[][];
}

const paidUser: UserType = {
  buttons: PaidPadButtons
};

const freeUser:UserType = {
  buttons: FreePadButtons
};


export const userTypeSlice = createSlice({
  name: 'user-type',
  initialState: {
    value: paidUser,
  },
  reducers: {
    setPaidUser: (state) => { state.value = paidUser; },
    setFreeUser: (state) => { state.value = freeUser; },
  }
});

export const { setPaidUser, setFreeUser } = userTypeSlice.actions;

export default userTypeSlice.reducer;