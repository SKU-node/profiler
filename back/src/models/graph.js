import { DataTypes } from "sequelize";
import sequelize from "../util/connect.js";

const Graph = sequelize.define("Graph", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  value: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Graph;
