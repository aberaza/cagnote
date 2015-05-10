var schema = require('mongoose').Schema;
var crypto = require('crypto');

var UserSchema = new Schema({
    name        : { type : String, default : '' },
    email       : { type : String, default : '' },
    username    : { type : String, default : '' },
    authToken   : { type : String, default : '' },
    pwdHash     : { type : String, default : '' },
    salt        : { type : String, default : '' }
});

/*
 * VIRTUAL FIELDS
 */

UserSchema.virtual('password')
    .set(function(pwd){
        this._pwd = password;
        this.salt = Math.round(Date.now() * Math.random()) + '';
        this.pwdHash = this.encryptPassword(pwd);
        })
    .get(function() {
        return this._pwd;
        });

/*
 * METHODS
 */
UserSchema.methods = {
    auth : function (pwd) { return this.encryptPassword(pwd) === this.pwdHash; },

    encryptPassword : function (pwd) {
        if(!pwd){
            console.warn("PWD was empty");
            return '';
        }

        try{
            return crypto.createHmac('sha1', this.salt).update(pwd).digest('hex');
        }catch(err){
            console.warn("Exception when digesting the password");
            console.warn(err);
            return '';
        }
    },


};
