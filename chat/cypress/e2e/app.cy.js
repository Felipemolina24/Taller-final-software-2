
describe('Prueba de registro, login y chat', () => {
    it('Registra un nuevo usuario, inicia sesión y envía un mensaje', () => {
        // Visitando la página de registro
        cy.visit('http://localhost:3000/register');

        // Llenando el formulario de registro
        cy.get('input[name="usuario"]').type('nuevoUsuario');
        cy.get('input[name="email"]').type('usuario@hotmail.com');
        cy.get('input[name="password"]').type('contraseña123');
        cy.get('#register-btn').click();


        cy.visit('http://localhost:3000/');
        // Iniciar sesión
        cy.get('input[name="email"]').type('usuario@hotmail.com');
        cy.get('input[name="password"]').type('contraseña123');

        // Marcar el checkbox de términos y condiciones
        cy.get('input[type="checkbox"]').check();
        // Envío del formulario de inicio de sesión
        cy.get('#login-btn').click();

        // Esperar a ser redirigido al dashboard o al chat
        cy.url().should('include', '/dashboard');

        cy.visit('http://localhost:3000/chat');

        // Enviar un mensaje en el chat
        cy.get('textarea[name="message"]').type('Hola, esto es un mensaje de prueba');
        cy.get('.send-messages-button').click();

        // Verificar que el mensaje se ha añadido al chat
        cy.contains('Hola, esto es un mensaje de prueba').should('exist');
    });
});
