import apiClient from "./api-client";

class UserService {
  getToken() {
    apiClient.post("/token", { email: "test@gmail.com", password: "125" });
  }
}

export default new UserService();
