
module.exports = function (orm, db) {
    //define your orm model here
    console.log('coming inside candidateId.js');
	var Users = db.define('users', {
		first_name:      { type: 'text' },
		last_name:    { type: 'text' },
		email:    { type: 'text' },
		password: { type: 'text' },
		created:    { type: 'text' },
		modified:    { type: 'text' }
	});

}; 