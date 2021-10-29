const mongoose = require('mongoose');
const AddServiceSchema = require('../Schemas/AddServiceSchema');



const AddServiceModel = mongoose.model("service", AddServiceSchema);






module.exports = AddServiceModel;


