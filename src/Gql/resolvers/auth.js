import jwtDecode from "jwt-decode";

// Resolver to check if current user is authenticated
const resolveIsAuthenticated = {
  Query: {
    isLoggedIn: (obj, args, ctx, info) => {
      // check if token exists and it hasn't expired
      const token = localStorage.getItem("AUTH_TOKEN");
      // If no token, then the user is unauthorized
      if (!token) return false;
      const decoded = jwtDecode(token);
      // If token exists but expired, then the user is unauthorized
      if (decoded.exp < Date.now() / 1000) {
        return false;
      }
      // User is authorized
      return true;
    },
  },
};

export { resolveIsAuthenticated };
