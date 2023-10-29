import { SET_OPTIONS, SET_SELECTED_VALUE } from "../types";

export const setSelectedValue = (value) => ({
  type: SET_SELECTED_VALUE,
  payload: value,
});

export const setOptions = (options) => ({
    type: SET_OPTIONS,
    payload: options,
  });