const userService = require("../Service/userService");

class UserController {

  async getCardStatus(req,res) {
    try {
      // console.log(req.body);
      const data = await userService.getCardStatus(req.body);
      res.json({
        Status : data
      })
    } catch (error) {
    res.status(500).send(error.message);
    }
  }
}

module.exports = new UserController();
