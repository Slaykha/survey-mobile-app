import React from 'react';
import AuthProvider from './Auth/AuthProvider';
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
