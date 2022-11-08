import React, { createContext, useReducer } from "react";

const initialState = {
  isLoggedIn: false,
  username: "Joanne",
  password: 123,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      const { username, password } = action.payload;
      return { ...state, isLoggedIn: true, username, password };
    case "LOGOUT":
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

const AuthContext = createContext({ ...initialState });

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (username, password, callback) => {
    dispatch({
      type: "LOGIN",
      payload: { username, password },
    });
    callback();
  };

  const logout = () => {
    const confirmation = window.confirm(
      "If you log out, you can not see more job details?",
      ""
    );

    if (confirmation) {
      dispatch({
        type: "LOGOUT",
      });
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
