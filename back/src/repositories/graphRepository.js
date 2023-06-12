import { Op } from "sequelize";
import { v4 } from "uuid";
import Graph from "../models/graph.js";

/**
 * create list
 * @uuid User uuid
 * @name string
 * @value string
 */
async function createGraph(uuid, name, value) {
  await Graph.create({ id: v4(), createdBy: uuid, name: name, value: value });
}

/**
 * find graph by userId
 * @userId User.id
 */
async function findByUser(userId) {
  const result = await Graph.findAll({
    where: {
      createdBy: { [Op.eq]: userId },
    },
  });

  return result;
}

/**
 * find graph by pk
 * @postId Graph.id
 */
async function findByPostId(PostId) {
  const result = await Graph.findByPk(PostId);
  return result;
}

/**
 * find list by date
 * @GraphId Graph.id
 */
async function findByGraphId(GraphId) {
  const result = await Graph.findByPk(GraphId);
  return result;
}

export default { createGraph, findByUser, findByGraphId, findByPostId };
