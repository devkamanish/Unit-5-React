import { createContext, useReducer, useContext } from "react";

const AuthContext = createContext();

const initialAuthState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, isAuthenticated: true, error: null };
    case "LOGIN_ERROR":
      return { ...state, error: action.payload };
    case "LOGOUT":
      return { user: null, isAuthenticated: false, error: null };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
