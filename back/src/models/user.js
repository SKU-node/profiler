import { DataTypes } from "sequelize";
import sequelize from "../util/connect.js";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.STRING(30),
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
});

export default User;
