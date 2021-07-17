import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../common/InputField";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./register.scss";
import { registerUser } from "../../redux/action";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (userData) => {
    dispatch(registerUser(userData));
    history.push("/login");
  };

  return (
    <main className="app-wrapper width-wrapper">
      <div className="app-section left">
        <h2 style={{ paddingBottom: "20px" }}>Signup</h2>
        <span>We do not share your personal details with anyone.</span>
      </div>
      <div className="app-section">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            type="text"
            name="firstName"
            label="First Name"
            register={register}
            rules={{
              minLength: {
                value: 2,
                message: `First Name is too Short.`,
              },
            }}
            error={errors}
            isRequired={true}
          />
          <InputField
            type="text"
            name="lastName"
            label="Last Name"
            register={register}
            error={errors}
            isRequired={true}
          />
          <InputField
            type="text"
            name="emailId"
            label="Email"
            register={register}
            rules={{
              pattern: {
                value: /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/i,
                message: "Not a valid email.",
              },
            }}
            error={errors}
            isRequired={true}
          />
          <InputField
            type="password"
            name="password"
            label="Password"
            register={register}
            rules={{
              minLength: {
                value: 6,
                message: `Password should contain minimum 6 characters.`,
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/i,
                message:
                  "Password should contain atleast a number and alphabet.",
              },
            }}
            error={errors}
            isRequired={true}
          />
          <InputField
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            register={register}
            error={errors}
            isRequired={true}
            rules={{
              validate: (value) =>
                value === watch("password") || "The passwords do not match.",
            }}
          />
          <button className="app-btn">Signup</button>
        </form>
      </div>
    </main>
  );
};

export default Register;
