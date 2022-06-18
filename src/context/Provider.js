import React, {createContext, useReducer} from 'react';
import auth from './reducers/auth';
import authInitialState from './initialStates/authState';
import contacts from './reducers/contacts';
import contactsInitialState from './initialStates/contactsInitialState';

const GlobalContext = createContext({});

const GlobalProvdider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    contacts,
    contactsInitialState,
  );
  return (
    <GlobalContext.Provider
      value={{
        authState,
        contactsState,
        authDispatch,
        contactsDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvdider;
