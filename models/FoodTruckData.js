var mongoose = require('mongoose');

var FoodTruckDataSchema = new mongoose.Schema({

    FIELD1: Number,
    FIELD2: String,
    FIELD3: String,
    FIELD4: String,
    FIELD5: String,
    FIELD6: String,
    FIELD7: String,
    FIELD8: String,
    FIELD9: String,
    FIELD10: String,
    FIELD11: String,
    FIELD12: String,
    FIELD13: String,
    FIELD14: String,
    FIELD15: String,
    FIELD16: String,
    FIELD17: String,
    FIELD18: String,
    FIELD19: String,
    FIELD20: String,
    FIELD21: String,
    FIELD22: String,
    FIELD23: String,
    FIELD24: String,
    FIELD25: String,
    FIELD26: String,
    FIELD27: String
}, 
{
  collection: 'food-truck-collection'
});

mongoose.model('FoodTruckData', FoodTruckDataSchema);

