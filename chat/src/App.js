import './App.css';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;