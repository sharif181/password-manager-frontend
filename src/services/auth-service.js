import apiClient from "./api-client";

class UserService {
  async getToken(data) {
    let token = null;
    await apiClient
      .post("/users/token/", data)
      .then((res) => (token = res.data.access));
    return token;
  }
}

export default new UserService();
