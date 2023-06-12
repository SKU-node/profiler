import userRepository from "../repositories/userRepository.js";

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

    const result = {
      id: userData[0].dataValues.id,
      userId: userData[0].dataValues.userId,
    };

    console.log(result);

    if (userData[0].password === password) return result;
    else throw new Error("wrong value");
  } catch (error) {
    throw error;
  }
}

export default { signIn, signUp };
