const { Delivered, PickUp, DeliveryException, Returned } = require("../Model/userModel");

class UserRepository {

  async getCardStatus(data) {
    const cardId = data.cardId;
    const currentObjects = [];
    await Delivered.findOne({ cardId }).then((data) => {
      if (data) {
        currentObjects.push(data);
      }
    });

    await PickUp.findOne({ cardId }).then((data) => {
      if (data) {
        currentObjects.push(data);
      }
    });

    await DeliveryException.findOne({ cardId }).then((data) => {
      if (data) {
        currentObjects.push(data);
      }
    });

    await Returned.findOne({ cardId }).then((data) => {
      if (data) {
        currentObjects.push(data);
      }
    });

    // console.log(currentObjects);
    currentObjects.sort((a, b) => {

      let dateA = new Date(a.timeStamp);
      let dateB = new Date(b.timeStamp);
      return dateB - dateA;
    });

    return currentObjects[0];
  }
}

module.exports = new UserRepository();
