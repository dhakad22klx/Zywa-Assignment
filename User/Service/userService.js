const userRepository = require("../Repository/userRepository");

class UserService {

  async getCardStatus(data) {
    try {
      return await userRepository.getCardStatus(data);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserService();
