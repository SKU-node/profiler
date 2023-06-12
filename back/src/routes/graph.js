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
    const uuid = req.query.uuid;
    const result = await graphService.getGraph(uuid);
    res.status(200).json({ result: result });
  } catch (error) {
    res.send(error);
  }
});

graph.delete("/", async (req, res) => {
  const { postId } = await req.body;
  const result = await graphService.deleteGraph(postId);
  res.status(200).json({ result: result });
});

export default graph;
