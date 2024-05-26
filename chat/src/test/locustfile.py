from locust import HttpUser, task, between

class WebsiteUser(HttpUser):
    # Establecer la URL base a la que apuntan todas las peticiones
    host = "http://localhost:4000"
    
    wait_time = between(1, 2)  # Tiempo de espera entre tareas

    def on_start(self):
        """ Acciones que se realizan una vez por cada usuario simulado antes de empezar las tareas """
        self.register()
        self.login()

    def register(self):
        self.client.post("/register", {
            "usuario": "testuser",
            "email": "test@example.com",
            "password": "safe_password"
        })

    def login(self):
        self.client.post("/login", {
            "email": "juan_fe59@hotmail.com",
            "password": "molinagomez"
        })

    @task
    def perform_task(self):
        """ Una tarea que simula alguna actividad del usuario """
        # Aquí, como ejemplo, navegamos a una página después del login
        self.client.get("/dashboard")
