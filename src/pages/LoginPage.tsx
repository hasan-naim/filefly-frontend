import React from "react";
import Svg from "../assets/login-page.svg";
// const Img = require("../assets/login-page.svg");
import { CgEye } from "react-icons/cg";

function LoginPage() {
  return (
    <main className="">
      <div className="gradient bg w-full h-screen overflow-hidden ">
        <div className="container  h-full grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="w-[600px] hidden lg:block">
            <img className="w-full" src={Svg} alt="" />
          </div>
          <div className="flex relative justify-center items-center ">
            <div className="backdrop-blur-md bg-slate-50/10 shadow-lg w-full max-w-[400px] min-h-[400px] py-10 px-6 rounded-xl z-10">
              <h1 className="text-6xl font-medium  text-center text-gray-200 mb-14">
                Log In
              </h1>
              <form action="">
                <InputBox type="text" name="Email" value="example@gmail.com" />
                <InputBox type="password" name="Password" value="password123" />
              </form>
              <button
                type="button"
                className="w-full mt-3 text-white bg-slate-800 active:scale-[0.8] hover:bg-slate-900
                font-medium rounded-lg text-md px-5 py-3 text-center mr-2 mb-2 duration-300 shadow-md"
              >
                Submit
              </button>
            </div>
            <div className="w-32 h-32 rounded-full bg-[rgba(23,185,255,0.83)] blur-3xl absolute right-32 top-4"></div>
            <div className="w-32 h-32 rounded-full bg-[#9b2fb1] blur-3xl absolute left-52 -bottom-4"></div>
            <div className="w-24 h-24 rounded-full bg-[#ff1038f9] blur-[80px] absolute left-78 -top-24"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

function InputBox({
  name,
  value,
  type,
}: {
  type: "text" | "password";
  name: string;
  value: "example@gmail.com" | "password123";
}) {
  return (
    <div className={`mb-3 ${type === "password" && "relative"}`}>
      <input
        type={"text"}
        id="default-input"
        value={value}
        className="bg-transparent border border-gray-400 outline-none text-gray-200 placeholder:text-gray-600 font-medium hover:bg-gray-800/50 hover:scale-[1.05] focus:scale-[1.05] text-sm rounded-lg focus:bg-gray-800/50 block w-full p-3 duration-300 "
        placeholder={name}
      />
      {type === "password" && (
        <span className=" absolute right-3 top-[30%]">
          <CgEye className="text-lg text-gray-200" />
        </span>
      )}
    </div>
  );
}

export default LoginPage;
