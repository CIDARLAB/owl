var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var Schema = mongoose.Schema;

/*The user schema attributes */
var UserSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String,
    
    facebook: String,
    google: String,
    tokens: Array,
    
    profile: {
        name: { type: String, default: ''},
        picture: { type: String, default: ''}
    },
    
    company: String
});

/* Hash the password before saving it to the mongoDB */
UserSchema.pre('save', function(next) {
    var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});


/* compare password in the database with the one being typed */
UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};


/* Gravatar */
UserSchema.methods.gravatar = function(size) {
    if (!this.size) size = 200;
    if (!this.email) return 'https://gravatar.com/avatar/?s' + size + '&d=retro';
    var md5 = crypto.createHash('md5').update(this.email).digest('hex');
    return 'https://gravatar.com/avatar/' + md5 + '?s=' + size + '&d=retro';
};


module.exports = mongoose.model('User', UserSchema);
