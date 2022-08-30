const sqlite = require("sqlite3").verbose();
const axios = require("axios");
let sql;

//connect the db

const db = new sqlite.Database("./test.db", sqlite.OPEN_READWRITE, (err) => {
  if (err) console.error(err);
});

//create table

// sql = `CREATE TABLE users(ID INTEGER PRIMARY KEY,username,first_name,last_name,email,birthday,country)`
//  db.run(sql)

//Get Data
async function getData(url) {
  try {
    const { data } = await axios.get(url);
    data.forEach((d) => {
      let userData = {
        username: d.username,
        first_name: d.first_name,
        last_name: d.last_name,
        email: d.email,
        birthday: d.date_of_birth,
        country: d.address.country,
      };
      sql = `INSERT INTO users(username,first_name,last_name,email,birthday,country) VALUES(?,?,?,?,?,?)`;
      db.run(
        sql,
        [
          userData.username,
          userData.first_name,
          userData.last_name,
          userData.email,
          userData.birthday,
          userData.country,
        ],
        (err) => {
          if (err) console.error(err);
        }
      );
    });
  } catch (error) {
    console.log(error);
  }
}
// getData("https://random-data-api.com/api/users/random_user/?size=20"); // nous a servi a remplir notre bdd avec des données d'une bdd externe

//query all data

sql = `SELECT * FROM users `;
db.all(sql, [], (err, rows) => {
  if (err) return console.error(err);
  rows.forEach((row) => console.log(row));
});
