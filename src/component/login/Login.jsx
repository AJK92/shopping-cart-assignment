import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../common/InputField";
import { useHistory } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const onSubmit = () => {
    history.push("/");
  };

  return (
    <div className="cart-wrapper width-wrapper">
      <div className="cart-section left">
        <h2 style={{ paddingBottom: "20px" }}>Login</h2>
        <span>Get access to your Orders, Wishlist and Recommendations.</span>
      </div>
      <div className="cart-section">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            type="text"
            name="email"
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
            error={errors}
            isRequired={true}
          />
          <button className="app-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
