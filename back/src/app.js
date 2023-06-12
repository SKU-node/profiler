import { Router } from "express";
import user from "./routes/user.js";
import graph from "./routes/graph.js";

const router = Router();

router.use("/user", user);
router.use("/graph", graph);

export default router;
