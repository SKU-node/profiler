import { Router } from "express";
import userService from "../service/userService.js";

const user = Router();

user.get("/", async (req, res) => {
  try {
    const result = await userService.userDuplicateCheck(req.query.userId);
    res.status(201).json({ result: result });
  } catch (error) {
    res.status(409).send(error.message);
  }
});

user.post("/signup", async (req, res) => {
  try {
    const { userId, password } = await req.body;
    const result = await userService.signUp(userId, password);
    res.status(201).json({ result: result });
  } catch (error) {
    res.send(error);
  }
});

user.post("/signin", async (req, res) => {
  try {
    const { userId, password } = await req.body;
    const result = await userService.signIn(userId, password);
    res.status(200).json(result);
  } catch (error) {
    res.status(403).send(error.message);
  }
});

export default user;
