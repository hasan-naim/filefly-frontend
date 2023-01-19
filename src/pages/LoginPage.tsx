import React from "react";
import Svg from "../assets/login-page.svg";
// const Img = require("../assets/login-page.svg");

function LoginPage() {
  return (
    <main className="">
      <div className="gradient bg w-full h-screen ">
        <div className="container">
          <img className="w-[500px] my-auto" src={Svg} alt="" />
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
