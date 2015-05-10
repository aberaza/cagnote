var schema = require('mongoose').Schema;
var crypto = require('crypto');

var ParticipantSchema = new Schema({
    name : { type : String, default : '' },
    email : {type : String, default : '' },
    cagnote : { type : Schema.ObjectId, ref : 'cagnotes'},
    user : { type : Schema.ObjectId, ref : 'users'},
    amount : {type : Number, default : 0 }
});

