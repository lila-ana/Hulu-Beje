import { CHECKBOX } from "../types";

export const ReduxCheckBox = (checked) => {
  return {
    type: CHECKBOX,
    payload: checked,
  };
};