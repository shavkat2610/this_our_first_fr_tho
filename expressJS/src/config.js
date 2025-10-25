const fs = require("fs");

const readFileSync = filename => fs.readFileSync(filename).toString("utf8");

// Constants
module.exports = {
  database: {
    host: process.env.DATABASE_HOST || "localhost",
    port: process.env.DATABASE_PORT || 3306,
    database: process.env.DATABASE_DB || "example",
    user: process.env.DATABASE_USER || "root",
    password: process.env.DATABASE_PASSWORD
      ? readFileSync(process.env.DATABASE_PASSWORD)
      : "db-btf5q"
  },
  port: process.env.PORT || 80
  // if you're not using docker compose for local development, this will default to 443
  // to prevent non-root permission problems with 80. Dockerfile is set to make this 80
  // because containers don't have that issue :)
};
