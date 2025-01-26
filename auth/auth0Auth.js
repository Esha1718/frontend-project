// auth0Auth.js
import { auth0Config } from "./auth0Config";
import { Auth0Client } from "@auth0/auth0-spa-js";

// Initialize Auth0 client
const auth0Client = new Auth0Client({
  domain: auth0Config.domain,
  client_id: auth0Config.clientId,
  redirect_uri: auth0Config.redirectUri,
});

// Function to log in with Auth0
export const loginWithAuth0 = async () => {
  try {
    await auth0Client.loginWithRedirect();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to handle the Auth0 callback
export const handleAuth0Callback = async () => {
  try {
    await auth0Client.handleRedirectCallback();
    const user = await auth0Client.getUser();
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to log out of Auth0
export const logOutWithAuth0 = async () => {
  try {
    await auth0Client.logout({ returnTo: window.location.origin });
  } catch (error) {
    throw new Error(error.message);
  }
};