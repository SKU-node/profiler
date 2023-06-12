import userRepository from "../repositories/userRepository.js";

async function userDuplicateCheck(userId) {
  try {
    const userData = await userRepository.findByUserId(userId);

    if (userData) throw new Error("duplicatedUser");
    else return true;
  } catch (error) {
    throw error;
  }
}

async function signUp(userId, password) {
  try {
    const result = await userRepository.createUser(userId, password);
    return result;
  } catch (error) {
    throw error;
  }
}

async function signIn(userId, password) {
  try {
    const userData = await userRepository.findByUserId(userId);

    if (userData) {
      const result = {
        id: userData.dataValues.id,
        userId: userData.dataValues.userId,
      };

      if (userData.password === password) return result;
    }
    throw new Error("wrong value");
  } catch (error) {
    throw error;
  }
}

export default { userDuplicateCheck, signIn, signUp };
