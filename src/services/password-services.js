import apiService from "./api-client";

class PasswordService {
  async getAllPassword() {
    let password = [];
    await apiService
      .get("password-store/")
      .then((res) => (password = res.data))
      .catch((err) => {
        if (err.response?.data?.code === "token_not_valid") {
          localStorage.removeItem("accessToken");
        }
      });
    return password;
  }

  async deletePassword(id) {
    let isSuccess = false;
    await apiService
      .delete(`password-store/${id}`)
      .then(() => (isSuccess = true))
      .catch(() => (isSuccess = false));

    return isSuccess;
  }

  async getPassword(id) {
    let password = null;
    await apiService
      .get(`password-store/${id}`)
      .then((res) => {
        password = res.data;
      })
      .catch((err) => console.log(err));
    return password;
  }

  async createPassword(data) {
    let password = null;
    await apiService
      .post("password-store/", data)
      .then((res) => (password = res.data))
      .catch((err) => console.log(err));
    return password;
  }
}

export default new PasswordService();
