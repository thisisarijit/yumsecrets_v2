import React, { useState } from 'react'

function SigninSignup() {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="max-w-md w-[90%] bg-gray-100 shadow-lg border border-gray-400 rounded-xl mx-auto mt-12 mb-12 py-8 px-6">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold text-black">{action}</h2>
        <div className="w-[61px] h-[6px] bg-black rounded-full"></div>
      </div>

      <div className="mt-8 flex flex-col gap-6">
        {action === "Login" ? null : (
          <div className="flex items-center bg-gray-200 rounded-md px-4 h-14 w-full">
            <img src="person.png" alt="icon" className="w-5 h-5 mr-4" />
            <input
              type="text"
              placeholder="Name"
              className="flex-1 bg-transparent outline-none text-black text-sm font-medium"
            />
          </div>
        )}

        <div className="flex items-center bg-gray-200 rounded-md px-4 h-14 w-full">
          <img src="email.png" alt="icon" className="w-5 h-5 mr-4" />
          <input
            type="email"
            placeholder="Email Id"
            className="flex-1 bg-transparent outline-none text-black text-sm font-medium"
          />
        </div>

        <div className="flex items-center bg-gray-200 rounded-md px-4 h-14 w-full">
          <img src="password.png" alt="icon" className="w-5 h-5 mr-4" />
          <input
            type="password"
            placeholder="Password"
            className="flex-1 bg-transparent outline-none text-black text-sm font-medium"
          />
        </div>
      </div>

      {action === "Sign Up" ? null : (
        <div className="text-center mt-6 text-sm text-gray-500">
          Forgot password? <span className="text-purple-700 cursor-pointer">Click Here</span>
        </div>
      )}

      <div className="flex flex-col items-center gap-3 mt-10">
        <button
          onClick={() => setAction("Sign Up")}
          className={`w-1/2 h-11 rounded-full text-sm font-medium ${
            action === "Login"
              ? "bg-gray-200 text-gray-600"
              : "bg-orange-500 text-white"
          }`}
        >
          Sign Up
        </button>
        <button
          onClick={() => setAction("Login")}
          className={`w-1/2 h-11 rounded-full text-sm font-medium ${
            action === "Sign Up"
              ? "bg-gray-200 text-gray-600"
              : "bg-orange-500 text-white"
          }`}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default SigninSignup;
