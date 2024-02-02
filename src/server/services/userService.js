import CostcoXRestClient from "../helpers/CostcoXRestClient";

const userServiceClient = new CostcoXRestClient(
  "https://costcoxbackend-production.up.railway.app"
);

export const registerUserAPI = async (req, res) => {
  try {
  } catch (error) {}
};

export const loginUserAPI = async (req, res) => {
  try {
    const payload = { ...req.body };
    const userDetails = await userServiceClient.post(
      "/api/user/login",
      payload
    );
    return userDetails;
  } catch (error) {
    console.log("Error:", error);
  }
};
