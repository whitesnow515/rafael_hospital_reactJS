/* eslint-disable react/prop-types */
import React from "react";
import Select from "react-select";

// create a component
const SelectField = ({
  value,
  options,
  state,
  errorMessage,
  error,
  label,
  placeholder,
  isRequired,
  onChangeValue,
  ...props
}) => {
  const colourStyles = {
    menu: (provided) => ({ ...provided, zIndex: 9999 }),
    control: (styles) => ({
      ...styles,
      minHeight: 50,
      borderRadius: 5,
      background: "#F5F6FA",
      border: "1px solid #E6E9F4",
    }),
  };
  return (
    <div className="form-group">
      {/* <div className="form-group form-focus"> */}

      <label className="form-name">
        {label} {isRequired && <span className="star-red">*</span>}
      </label>
      <Select
        styles={colourStyles}
        options={options}
        state={state}
        placeholder={placeholder}
        width="100%"
        className={`select floating ${error && "select-error"}`}
        value={value}
        onChange={onChangeValue}
        {...props}
      />
      {error && <p className="error-message">{errorMessage}</p>}
      {/* </div> */}
    </div>
  );
};

export default SelectField;
