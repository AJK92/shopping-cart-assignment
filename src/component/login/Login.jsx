import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../common/InputField";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./login.scss";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const registeredUser = useSelector(
    (state) => state.CartReducer.registeredUsers
  );

  const onSubmit = (loginUser) => {
    const isRegistered =
      registeredUser.filter(
        (regUser) => regUser.emailId === loginUser.emailId
      ) || [];
    if (isRegistered.length) {
      if (isRegistered[0].password == loginUser.password) {
        history.push("/product");
      } else {
        alert("Username or Password is wrong.");
      }
    } else {
      alert("Couldnot find the user in the system. Please Signup.");
    }
  };

  return (
    <main className="app-wrapper width-wrapper">
      <div className="app-section">
        <h2 style={{ paddingBottom: "20px" }}>Login</h2>
        <span>Get access to your Orders, Wishlist and Recommendations.</span>
      </div>
      <div className="app-section">
        <form onSubmit={handleSubmit(onSubmit)}>
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
            error={errors}
            isRequired={true}
          />
          <button className="app-btn">Login</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
