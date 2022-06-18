import React, {createContext, useReducer} from 'react';

const GlobalContext = createContext({});

const GlobalProvdider = ({children}) => {
  const [authState, authDispatch] = useReducer(authReducer, {});
  return <GlobalContext.Provider value={[]}>{children}</GlobalContext.Provider>;
};
