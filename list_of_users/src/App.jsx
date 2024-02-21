import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import UserList from './UserList';
import UserDetails from './UserDetails';


function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element ={<UserList />} />
        <Route path="/:id" element={<UserDetails />} />
      </Routes>  
    </ChakraProvider>

  );
}

export default App;

