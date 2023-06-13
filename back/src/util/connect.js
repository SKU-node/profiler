import { Sequelize } from "sequelize";
import { config } from "dotenv";

// db connecting
config();

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "postgres",
  define: {
    freezeTableName: true,
  },
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;
