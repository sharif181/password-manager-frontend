import apiClient from "./api-client";

class UserService {
  getToken(data) {
    return apiClient.post("/users/token/", data);
  }
}

export default new UserService();
