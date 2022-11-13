import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './Store';
// import React from 'react';

interface SubjectState {
  subject: string;
}

// export type = {
//   cursorText:
// }

interface CursorState {
  text: string;
  curr: string;
}

const subjectInitialState: SubjectState = {
  subject: '설립목적',
};

const cursorInitialState: CursorState = {
  text: '',
  curr: 'main',
};

const overlayInitialState = {
  enabled: false,
};

export const subjectSlice = createSlice({
  name: 'subject',
  initialState: subjectInitialState,
  reducers: {
    changeSubject: (state, action: PayloadAction<string>) => {
      state.subject = action.payload;
    },
  },
});

export const cursorSlice = createSlice({
  name: 'cursor',
  initialState: cursorInitialState,
  reducers: {
    changeText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    changeCurr: (state, action: PayloadAction<string>) => {
      state.curr = action.payload;
    },
  },
});

export const overlaySlice = createSlice({
  name: 'overlay',
  initialState: overlayInitialState,
  reducers: {
    onOffOverlay: (state, action: PayloadAction<boolean>) => {
      state.enabled = action.payload;
    },
  },
});

export const { changeSubject } = subjectSlice.actions;
export const { changeText, changeCurr } = cursorSlice.actions;
export const { onOffOverlay } = overlaySlice.actions;
export const getSubject = (state: RootState) => state.subject;
export const getCurrState = (state: RootState) => state.cursor.curr;
export const [subjectReducer, cursorReducer, overlayReducer] = [
  subjectSlice.reducer,
  cursorSlice.reducer,
  overlaySlice.reducer,
];
