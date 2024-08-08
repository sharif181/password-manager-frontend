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
}

export default new PasswordService();
