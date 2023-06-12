import sequelize from "../util/connect.js";
import User from "./user.js";
import Graph from "./graph.js";

async function bulk() {
  User.hasMany(Graph, {
    // user, Graph 관계 정립
    foreignKey: "createdBy",
    allowNull: false,
    constraints: true,
    onDelete: "cascade",
  });

  Graph.belongsTo(User, {
    // user, Graph 관계 정립
    foreignKey: "createdBy",
  });

  await sequelize.sync({ force: true }); // sync 시작
}

export { User, Graph, bulk };
