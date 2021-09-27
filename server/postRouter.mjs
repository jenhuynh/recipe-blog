import express from "express";

import * as db from "./db.mjs";

const postRouter = express.Router();

postRouter.get("/", async (request, response) => {
  const post = await db.getPostOne();
  response.json(post);
});

// postRouter.use(express.json());
// postRouter.post("/", async (request, response) => {
//   const post = await db.addPost(request.body.name);
//   response.status(201).json(post);
// });

export default postRouter;
