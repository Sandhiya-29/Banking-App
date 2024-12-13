import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoute'; 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route
              path="/dashboard"
              element={<ProtectedRoute element={<Dashboard />} />} 
            />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
