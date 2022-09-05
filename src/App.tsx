import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HeaderContainer } from './containers/HeaderContainer/HeaderContainer';
import { Layout } from './containers/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      </Route>
    </Routes>
  );
}

export default App;
