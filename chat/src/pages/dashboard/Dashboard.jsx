import React from 'react'
import { useAuth } from '../../context/AuthContext'
const Dashboard = () => {

  const {user} = useAuth()

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}> 
      <h1>Bienvenido {user?.usuario}</h1>
    </div>
  )
}

export default Dashboard