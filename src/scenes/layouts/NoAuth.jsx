import React from "react";

import { Navigate } from "react-router-dom";
import { useValue } from "../../context/ContextProvider";

const NoAuth = ({ children }) => {
  const {
    state: { currentUser },
  } = useValue();

  return children;
  // return !currentUser ? children : <Navigate to="/" replace={true} />;
};

export default NoAuth;
