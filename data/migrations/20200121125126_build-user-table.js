
exports.up = function(knex) {
	return knex.schema.createTable("users", table => {
		table.uuid("id").defaultTo(knex.raw("uuid_generate_v4()"));
		table
			.string("email")
			.notNullable()
			.unique();
		table.string("password").notNullable();
		table.string("name").notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists("users");
};
