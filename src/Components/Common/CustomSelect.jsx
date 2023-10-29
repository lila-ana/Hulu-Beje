// CustomSelect.js
import React from "react";
import { Select } from "antd";
import { connect } from "react-redux";

const { Option } = Select;

const CustomSelect = ({ options, selectedValue, setSelectedValue, url }) => {
  
  return (
    <Select
      value={selectedValue}
      onChange={handleSelectChange}
    //   style={{ width: 200 }}
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

const mapStateToProps = (state) => ({
  selectedValue: state.selectedValue,
  options: state.options,
});
const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedValue: (data) => dispatch(setSelectedValue(data)),
        fetchOptions,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomSelect);
