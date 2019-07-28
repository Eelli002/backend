exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("guests").then(function() {
		// Inserts seed entries
		return knex("guests").insert([
			{
				user_id: 1,
				event_id: 1,
				attending: true
			},
			{
				user_id: 1,
				event_id: 2,
				attending: false
			},
			{
				user_id: 2,
				event_id: 2,
				attending: true
			}
		]);
	});
};
