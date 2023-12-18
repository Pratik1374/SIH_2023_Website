import React, { useState, useContext } from "react";
import wave from "../assets/wave.svg";
import loginImg from "../assets/login.svg";
import loginBotImage from "../assets/chatbot.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext.jsx";
import loginPageGradient from "../assets/loginPageGradient.svg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Homepage = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const navigateTo = useNavigate();
  const { loginUser } = useAuth();
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      console.log("handleLogin function called");
      const response = await demoAuth(username, password);
      const userData = response.data;
      loginUser(userData);
      navigateTo("/chatbot");
    } catch (error) {
      console.error("Authentication failed:", error.message);
    }
  };
  const demoAuth = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "test" && password === "test123") {
          resolve({ data: { username: "demo", role: "user" } });
        } else {
          reject(new Error("Invalid username or password"));
        }
      }, 1000);
    });
  };

  return (
    <>
      <div className="bg-[#455A64] h-screen">
        <div className="flex flex-col-reverse lg:flex-row overflow-hidden  bg-[#15151B] lg:gap-36">
          {/* input */}
          <div className="flex items-center justify-center lg:h-screen h-[50%] lg:max-w-[50%] max-w-[100%] max-h-[50%] lg:ml-48 lg:mt-0 mt-[-100px] scale-110">
            <div className="lg:w-[28rem] w-[100%] p-8 bg-[#15151B] text-white  rounded-md">
              <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent ">
                Login With Your Account
              </h2>

              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-600 relative"
                  >
                    <input
                      type="text"
                      id="username"
                      value={username}
                      autoComplete="off"
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full h-[55px] mt-5 p-2 px-4 border border-white/30 rounded-md peer bg-[#15151B] outline-none text-white focus:border-purple-400 focus:bottom-5 "
                    />
                    <span className="bg-[#15151B] absolute top-[38px] left-3 transition duration-200 pointer-events-none px-1 transform peer-focus:-translate-y-7 peer-valid:-translate-y-7">
                      Username
                    </span>
                  </label>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-600 relative"
                  >
                    <input
                      required
                      type={showPassword ? "text" : "password"}
                      id={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="off"
                      className="w-full h-[55px] mt-5 p-2 px-4 border border-white/30 rounded-md peer bg-[#15151B] outline-none text-white focus:border-purple-400 focus:bottom-5 "
                    />
                    <span className="bg-[#15151B] absolute top-[38px] left-3 transition duration-200 pointer-events-none px-1 transform peer-focus:-translate-y-7 peer-valid:-translate-y-7">
                      Password
                    </span>

                    <button 
                      type="button" 
                      onClick={handleTogglePassword}
                      className="text-xl absolute top-10 right-4 hover:text-white/50"
                    >
                      {showPassword ? <FaEye/> : <FaEyeSlash/>}
                    </button>

                    <span className="text-xs text-white/50 absolute right-0 bottom-[-1.2rem] underline hover:text-white/90">
                      Forgot your Password?
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full mt-5 border border-white/10 bg-purple-600 text-white text-2xl p-2 rounded-full hover:bg-purple-900  cursor-pointer outline-none"
                >
                  Login
                </button>

                <div className="w-full mt-10 flex items-center justify-center">
                  <h2>
                    Don’t have an account?{" "}
                    <span className="text-[#9A4FF9] underline">Create one</span>
                  </h2>
                </div>
              </form>
            </div>
          </div>

          {/* vector */}
          <div className="w-[100vw] flex items-center justify-center">
            <div className="w-full h-screen flex justify-start">
              <img
                src={loginPageGradient}
                className="hidden lg:block  shrink-0"
              />
              <div className="w-full bg-[#9647F9] hidden lg:block"></div>
            </div>
            <img
              src={loginBotImage}
              alt="logo"
              className="lg:w-[37.25rem] lg:h-[37.25rem]  lg:mt-0 lg:ml-32 mt-[-100px] absolute overflow-hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
