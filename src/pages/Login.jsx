import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authcheck } from "../redux-toolkit/dataslice";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-screen flex justify-center items-center p-5 text-white bg-blue-950 font-bold">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(authcheck({ username, password }));
          setusername("");
          setpassword("");
        }}
        className="flex flex-col justify-center h-120 w-120 shadow-white  shadow-2xl text-2xl gap-5 rounded-2xl bg-blue-800 items-center"
      >
        <h1 className="text-5xl mb-10">Login</h1>
        <input
          value={username}
          type="email"
          placeholder="Enter your Email"
          className="bg-white text-black p-2 rounded-2xl border-2 border-amber-600"
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        <input
          value={password}
          type="password"
          placeholder="Enter your password"
          className="bg-white text-black p-2  rounded-2xl"
          autoComplete="current password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button className="bg-black text-white h-12 w-70 active:scale-95 rounded-2xl">
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
