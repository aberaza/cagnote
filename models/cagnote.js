var mongoose = require('mongoose');

var CagnoteSchema = new Schema({
    name : {type : String, default : '', trim : true},
    desc : {type : String, default : '', trim : true},
    collected : {type : Number, default : 0},
    expiryDate: {type : Date},
    creationDate : {type : Date, default : Date.now},
    owner : {type : Schema.ObjectId, ref : "User"},
    participants : { type : Array, ref : "Participant"},
    recommendedAmount : {type : Number, default : 0}
});


var Cagnote = mongoose.model('Cagnote', CagnoteSchema);

exports = module.exports = Cagnote;
