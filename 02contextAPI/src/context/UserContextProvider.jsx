import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <UserContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
