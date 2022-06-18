import 'react-native-gesture-handler';
import React from 'react';
import AppNavContainer from './src/navigations';
import GlobalProvdider from './src/context/Provider';

const App = () => {
  return (
    <GlobalProvdider>
      <AppNavContainer></AppNavContainer>
    </GlobalProvdider>
  );
};

export default App;
