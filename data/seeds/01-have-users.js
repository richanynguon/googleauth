exports.seed = function(knex) {
	return knex("users")
		.del()
		.then(function() {
			return knex("users").insert([
				{
					id: 1,
					email: "oneeighthundred@gmail.com",
					password: "thisguyfucksalot",
					name: "Jared"
				},
				{
					id: 2,
					email: "tonkystarks@gmail.com",
					password: "iamironman",
					name: "Tony Stark"
				},
				{
					id: 3,
					email: "test",
					password: "safepassword",
					name: "tester"
				}
			]);
		});
};
