import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxCheckBox } from '../../Redux/Actions/checkboxActions';
import { Checkbox } from 'antd';

const CustomCheckbox = ({ label, ...rest }) => {
  const isChecked = useSelector((state) => state.checkbox.isChecked);
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(ReduxCheckBox(!isChecked));
  };

  return (
    <div {...rest}>
      <Checkbox
        {...rest}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {isChecked ? '✓' : ''}
      <span {...rest}>{label}</span>
    </div>
  );
};

export default CustomCheckbox;
