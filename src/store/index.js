import { createContext, useContext, useReducer } from "react";
import { authInitialState } from "./auth/auth-initial-state";
import { authReducer } from "./auth/auth-reducer";
import { counterInitialState } from "./counter/counter-initial-state";
import { counterReducer } from "./counter/counter-reducer";

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [counterState, dispatchCounter] = useReducer(
    counterReducer,
    counterInitialState
  );

  const [authState, dispatchAuth] = useReducer(authReducer, authInitialState);

  return (
    <StoreContext.Provider
      value={{ counterState, dispatchCounter, authState, dispatchAuth }}
    >
      {children}
    </StoreContext.Provider>
  );
};
