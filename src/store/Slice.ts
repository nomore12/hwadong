import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './Store';

interface SubjectState {
  subject: string;
}

const initialState: SubjectState = {
  subject: '설립목적',
};

export const subjectSlice = createSlice({
  name: 'subject',
  initialState,
  reducers: {
    changeSubject: (state, action: PayloadAction<string>) => {
      state.subject = action.payload;
    },
  },
});

export const { changeSubject } = subjectSlice.actions;
export const getSubject = (state: RootState) => state.subject;
export default subjectSlice.reducer;
