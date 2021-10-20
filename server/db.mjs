import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getTasks = () => db.any("SELECT * FROM tasks");

export const getPost1 = () => db.any("SELECT * FROM blog1");

export const getPost2 = () => db.any("SELECT * FROM blog2");

export const getPost3 = () => db.any("SELECT * FROM blog3");

export const getPost4 = () => db.any("SELECT * FROM blog4");

export const addPost = async ({
  date,
  title,
  description,
  steps,
  ingredients,
  imageurl,
  credit,
}) =>
  await db.any(
    "INSERT INTO blog4(date, title, description, steps, ingredients, imageurl, credit) VALUES($1, $2, $3, $4, $5, $6, $7)",
    [date, title, description, steps, ingredients, imageurl, credit],
  );

// export const addEntry = ({ body }) =>
//   db.one("INSERT INTO entries(entry) VALUES(${body}) RETURNING *", { body });

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
