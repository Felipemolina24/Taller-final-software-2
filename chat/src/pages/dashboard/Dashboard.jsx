import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './Dashboard.css'; // Import the CSS file
import AnimatedD from './animationD/animatedD';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="wrapper">
      <div className="wrapper-left">
        <div className="content">
          <h1>Bienvenido {user?.usuario}</h1>
        </div>
      </div>
      <div className="wrapper-basic wrapper-right">
        <AnimatedD />
      </div>
    </div>
  );
};

export default Dashboard;
