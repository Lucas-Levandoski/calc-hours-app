import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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

const getUserTypeById = createAsyncThunk(
  'user-type/userType',
  async (userId: number) => {
    const res = await fetch('testjson/local', { method: 'get', headers: { 'userId': userId.toString() }, }).then( data => data.json());
    return res;
  }
);


export const userTypeSlice = createSlice({
  name: 'user-type',
  initialState: {
    value: paidUser,
  },
  reducers: {
    setPaidUser: (state) => { state.value = paidUser; },
    setFreeUser: (state) => { state.value = freeUser; },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserTypeById.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  }
});

export const { setPaidUser, setFreeUser } = userTypeSlice.actions;

export default userTypeSlice.reducer;