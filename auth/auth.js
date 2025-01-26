import { postData } from "../api/api";

// Login function
export const login = async (email, password) => {
  const data = { email, password };
  const result = await postData("/login", data);
  return result;
};

// Signup function
export const signup = async (email, password, name) => {
  const data = { email, password, name };
  const result = await postData("/signup", data);
  return result;
};