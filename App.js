import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from './Auth/AuthProvider';
import Nav from './navigation/Nav';

//export const ENDPOINT = "http://localhost:12345:12345"

const App = () => {
  return(
    <AuthProvider>
      <Nav />
    </AuthProvider>
  )
}

export default App;
