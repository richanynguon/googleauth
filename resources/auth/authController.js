const db = require('../../data/dbConfig');

exports.createUser = user => {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return this.filter({ id });
    });
};


exports.findBy = param => {
  return db('users')
    .select('id', 'name', 'email')
    .where(param)
    .first();
};



