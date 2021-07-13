import React from "react";
import "./common.scss";

const InputField = ({
  name,
  type,
  label,
  register,
  rules,
  error,
  isRequired,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        {...register(`${name}`, {
          required: isRequired && `${label} is required.`,
          ...rules,
        })}
        autoComplete="off"
      ></input>
      <p className="app-validation-error">
        {error && error[name] && error[name].message}
      </p>
    </>
  );
};

export default InputField;
