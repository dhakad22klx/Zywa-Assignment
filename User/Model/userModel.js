const {mongoose } = require("mongoose");

const PickupSchema = new mongoose.Schema({
    id: String,
    cardId: String,
    userContact: Number,
    timeStamp: String,
    comment: {
        type: String,
        default: 'Card Picked'
    }
})

const DeliveredSchema = new mongoose.Schema({
    id: String,
    cardId: String,
    userContact: Number,
    timeStamp: String,
    comment: {
        type: String,
        default: "Delivered"
    }
})

const ReturnedSchema = new mongoose.Schema({
    id: String,
    cardId: String,
    userContact: Number,
    timeStamp: String,
    comment: {
        type: String,
        default: 'Card Returned'
    }
})

const DeliveryExceptionSchema = new mongoose.Schema({
    id: String,
    cardId: String,
    userContact: Number,
    timeStamp: String,
    comment: String
})

const PickUp = mongoose.model('PickUp', PickupSchema);
const Delivered = mongoose.model('Delivered', DeliveredSchema);
const Returned = mongoose.model('Returned', ReturnedSchema);
const DeliveryException = mongoose.model('DeliveryException', DeliveryExceptionSchema);


module.exports = {
    PickUp,
    Delivered,
    Returned,
    DeliveryException
}