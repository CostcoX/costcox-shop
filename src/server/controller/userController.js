import { loginUserAPI } from "../services/userService";

export const resgisterUser = async (req, res) => {
  return res.send("Hi");
};

export const loginUser = async (req, res) => {
  try {
    const user = await loginUserAPI(req, res);
    res.cookie("accessToken", user?.accessToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.cookie("refreshToken", user?.refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.status(200).json({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      mobile: user.mobile,
      role: user.role,
    });
  } catch (error) {
    console.log("Error", error);
  }
};
