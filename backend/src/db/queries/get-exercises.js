const db = require('../connection');

const getAllExercisesForDropDownMenu = () => {
  return db
    .query(`
    SELECT * FROM exercises
    WHERE id = ANY (ARRAY[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
    ORDER BY title`)
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.log('Query Error: ', err);
    });
};


module.exports = { getAllExercisesForDropDownMenu };