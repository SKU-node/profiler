import graphRepository from "../repositories/graphRepository.js";

async function writeGraph(userUUID, name, value) {
  try {
    await graphRepository.createGraph(userUUID, name, value);
    return "complete";
  } catch (error) {
    throw error;
  }
}

async function getGraph(userUUID) {
  try {
    const schedules = await graphRepository.findByUser(userUUID);
    const result = schedules.map((e) => ({
      postId: e.dataValues.id,
      name: e.dataValues.name,
      value: e.dataValues.value,
      createdAt: e.dataValues.createdAt,
      updatedAt: e.dataValues.updatedAt,
    }));
    return result;
  } catch (error) {
    throw error;
  }
}

async function deleteGraph(graphId) {
  const result = await graphRepository.findByGraphId(graphId);
  await result.destroy();
  return "complete";
}

export default { writeGraph, getGraph, deleteGraph };
