import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authcheck } from "../redux-toolkit/dataslice";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-screen flex justify-center items-center p-4 bg-slate-950 overflow-hidden relative font-sans">
      {/* Background abstract gradient glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none"></div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(authcheck({ username, password }));
          setusername("");
          setpassword("");
        }}
        className="w-full max-w-md bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col relative z-10"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-white tracking-tight">Welcome Back</h1>
          <p className="text-slate-400 mt-2 text-sm font-medium">
            Sign in to manage tasks and track productivity.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Email Address
            </label>
            <input
              value={username}
              type="email"
              placeholder="name@example.com"
              className="bg-slate-950/80 border border-slate-800 text-white p-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all duration-300 font-semibold"
              onChange={(e) => {
                setusername(e.target.value);
              }}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Password
            </label>
            <input
              value={password}
              type="password"
              placeholder="••••••••"
              className="bg-slate-950/80 border border-slate-800 text-white p-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all duration-300 font-semibold"
              autoComplete="current-password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <button className="mt-8 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 rounded-xl transition-all duration-300 active:scale-95 shadow-lg shadow-indigo-600/30 cursor-pointer text-sm">
          Sign In
        </button>

        {/* Guest credentials hint for easy testing */}
        <div className="mt-6 text-center border-t border-slate-800/80 pt-4">
          <span className="text-[11px] text-slate-500 block font-medium">
            Admin: admin@example.com (pw: 123)
          </span>
          <span className="text-[11px] text-slate-500 block font-medium mt-1">
            Employee: shahmeer@example.com (pw: 123)
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
