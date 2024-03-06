import axios from "axios";

const API_URL = "http://localhost:4000/api"

export const loginRequest = (user) => axios.post(`${API_URL}/login`, user);