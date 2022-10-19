import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './Store';
// import React from 'react';

interface SubjectState {
  subject: string;
}

interface CursorState {
  text: string;
  curr: 'gallery' | 'notice' | 'main' | 'archive' | 'more' | '' | 'back';
}

const subjectInitialState: SubjectState = {
  subject: '설립목적',
};

const cursorInitialState: CursorState = {
  text: '',
  curr: 'main',
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
    changeCurr: (
      state,
      action: PayloadAction<
        'gallery' | 'notice' | 'main' | 'archive' | 'more' | '' | 'back'
      >
    ) => {
      state.curr = action.payload;
    },
  },
});

export const { changeSubject } = subjectSlice.actions;
export const { changeText, changeCurr } = cursorSlice.actions;
export const getSubject = (state: RootState) => state.subject;
export const getCurrState = (state: RootState) => state.cursor.curr;
export const [subjectReducer, cursorReducer] = [
  subjectSlice.reducer,
  cursorSlice.reducer,
];
