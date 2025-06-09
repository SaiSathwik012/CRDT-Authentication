import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompanyDetails from './components/CompanyDetails/CompanyDetails.jsx';
import LoginPage from "./components/LoginPage/LoginPage.jsx"
import SignUp from "./components/SignUp/SignUp.jsx";
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
      <CompanyDetails />
    </Router>
  );
}

export default App;
