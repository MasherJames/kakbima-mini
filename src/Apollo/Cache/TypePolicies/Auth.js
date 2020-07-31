import jwtDecode from "jwt-decode";

// Resolver to check if current user is authenticated
const isAuthenticated = (token = null) => {
  // check if token exists it's expiry
  token = localStorage.getItem("AUTH_TOKEN");

  if (token) {
    const decoded = jwtDecode(token);
    return decoded.exp > Date.now() / 1000;
  }
  return false;
};

export { isAuthenticated };
