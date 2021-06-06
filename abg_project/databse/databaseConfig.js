module.exports = {
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "aria0704**",
  database: "abg",
  //dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
