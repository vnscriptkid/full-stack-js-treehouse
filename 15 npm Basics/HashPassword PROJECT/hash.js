var myPlaintextPassword = 'unsecureString';

var bcrypt = require('bcrypt');
var saltRounds = 50;

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        console.log(hash);
    });
});
