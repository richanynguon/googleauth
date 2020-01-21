var uuid = require('uuid');
exports.seed = function(knex) {
	return knex("users")
		.del()
		.then(function() {
			return knex("users").insert([
				{
					id: uuid.v4(),
					email: "oneeighthundred@gmail.com",
					password: "thisguyfucksalot",
					name: "Jared"
				},
				{
					id: uuid.v4(),
					email: "tonkystarks@gmail.com",
					password: "iamironman",
					name: "Tony Stark"
				},
				{
					id: uuid.v4(),
					email: "test",
					password: "safepassword",
					name: "tester"
				}
			]);
		});
};
