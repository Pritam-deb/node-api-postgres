const Pool = require("pg").Pool;
const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "api",
  password: "password",
  port: 5432,
});

const getUsers = (req, res) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

const getUsersById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM users WHERE id=$1", [id], (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

module.exports = { getUsers, getUsersById };
