import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Chat from '../pages/chats/Chat';
import { AuthProvider } from '../context/AuthContext';


describe('Chat Component Tests', () => {
  test('render chat component', () => {
    // Envuelve el componente Chat en el AuthProvider
    render(
      <AuthProvider>
        <Chat />
      </AuthProvider>
    );
    const buttonElement = screen.getByText(/Enviar/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
