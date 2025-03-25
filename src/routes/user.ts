import { Router } from "express";
import { User } from "../entities/User";
import { getRepository } from "typeorm";

const router = Router();

router.post("/users", async (req, res) => {
  const userRepository = getRepository(User);
  const user = userRepository.create(req.body);
  await userRepository.save(user);
  res.json(user);
});

export default router;