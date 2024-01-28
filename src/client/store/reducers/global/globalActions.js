import { createAction } from "@reduxjs/toolkit";

// Action Names
export const LOAD_INITIAL_STATE = "global/LOAD_INITIAL_STATE";

// Action Creators
export const loadInitialState = createAction(LOAD_INITIAL_STATE);
