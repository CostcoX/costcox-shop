import React, { useState } from "react";
import googleIcons from "../../../../public/images/googleicon.svg";
import { isLoginPage } from "../../common/utils";
import { Link } from "react-router-dom";

const LoginPageComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const handlePasswordVisibility = (event) => {
    event.preventDefault();
    setPasswordVisibility(!isPasswordVisible);
  };
  const pageTextConfig = {
    heading: "",
    redirectUserAction: {
      heading: "",
      redirectText: "",
    },
    buttonActionText: "",
    redirectLink: "",
  };
  if (isLoginPage()) {
    pageTextConfig.heading = "Login";
    pageTextConfig.redirectUserAction.heading = "New to CostcoX?";
    pageTextConfig.redirectUserAction.redirectText = "Create an account";
    pageTextConfig.buttonActionText = "Sign In";
    pageTextConfig.redirectLink = "/register";
  } else {
    pageTextConfig.heading = "Register";
    pageTextConfig.redirectUserAction.heading = "Already having an account?";
    pageTextConfig.redirectUserAction.redirectText = "Login";
    pageTextConfig.buttonActionText = "Sign Up";
    pageTextConfig.redirectLink = "/login";
  }
  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2 p-4 mx-auto">
        <div className="flex flex-col justify-center py-24 max-w-md mx-auto h-full">
          <form>
            <h1 className="text-3xl font-bold font-heading mb-4">
              {pageTextConfig.heading}
            </h1>
            <div className="inline-block text-gray-500 hover:transition duration-200 mb-8">
              <span>{pageTextConfig.redirectUserAction.heading}</span>
              <span></span>
              <span className="font-bold font-heading">
                <Link to={pageTextConfig.redirectLink}>
                  {pageTextConfig.redirectUserAction.redirectText}
                </Link>
              </span>
            </div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              className="w-full rounded-full p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-orange-200 transition duration-200 mb-4"
              type="email"
              placeholder="Enter you email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="flex items-center gap-1 w-full rounded-full p-4 border border-gray-100 shadow mb-2">
              <input
                className="outline-none flex-1 placeholder-gray-500"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handlePasswordVisibility}>
                {isPasswordVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </button>
            </div>
            {isLoginPage() ? (
              <div className="inline-block text-gray-500 hover:transition duration-200">
                <span>Can’t remember your password? </span>
                <span></span>
                <span className="font-bold font-heading">
                  <Link to="/forgot-password">Reset your password.</Link>
                </span>
              </div>
            ) : null}
            <button className="h-14 inline-flex items-center justify-center py-4 px-6 text-white font-bold font-heading rounded-full bg-green-500 w-full text-center border border-green-600 shadow hover:bg-green-600 focus:ring focus:ring-green-200 transition duration-200 mb-8 mt-8">
              {pageTextConfig.buttonActionText}
            </button>
            <button className="h-14 inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-white w-full text-center border border-gray-100 shadow hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200">
              <img src={googleIcons} />
              <span className="font-bold font-heading">
                {`${pageTextConfig.buttonActionText} with Google`}
              </span>
            </button>
          </form>
        </div>
      </div>
      {/* <div className="w-full lg:w-1/2"></div> */}
    </div>
  );
};

export default LoginPageComponent;
