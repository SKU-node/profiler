import { Router } from "express";
import graphService from "../service/graphService.js";

const graph = Router();

graph.post("/", async (req, res) => {
  try {
    const { uuid, name, value } = await req.body;
    const result = await graphService.writeGraph(uuid, name, value);
    res.status(201).json({ result: result });
  } catch (error) {
    res.send(error);
  }
});

graph.get("/", async (req, res) => {
  try {
    let result;
    const uuid = req.query.uuid;

    if (uuid) result = await graphService.getGraph(uuid);
    else result = await graphService.findGraph(req.query.postId);

    res.status(200).json({ result: result });
  } catch (error) {
    res.status(403).send(error);
  }
});

graph.delete("/", async (req, res) => {
  const { postId } = await req.body;
  const result = await graphService.deleteGraph(postId);
  res.status(200).json({ result: result });
});

export default graph;
