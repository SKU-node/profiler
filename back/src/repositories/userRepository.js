import { Op } from "sequelize";
import { User } from "../models/index.js";
import { v4 } from "uuid";

/**
 * create user
 * @name  string
 * @password string
 */
async function createUser(userId, password) {
  try {
    const uuid = v4();
    await User.create({ id: uuid, userId: userId, password: password });
    return "complete";
  } catch (error) {
    throw error;
  }
}

/**
 * find user by name
 * @userId string
 */
async function findByUserId(userId) {
  const result = await User.findOne({
    where: {
      userId: { [Op.eq]: userId },
    },
  });

  return result;
}

export default { findByUserId, createUser };
