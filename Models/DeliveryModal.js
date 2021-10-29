const mongoose = require('mongoose');
const DeliveryInfoSchema = require('../Schemas/DeliverySchema');


const deliveryModal = mongoose.model('clientDeliveryInfo', DeliveryInfoSchema);


module.exports = deliveryModal;