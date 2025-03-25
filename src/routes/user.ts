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

router.delete("/users/:id", async (req, res) => {
    const userRepository = getRepository(User);
    const result = await userRepository.delete(req.params.id);
    res.json(result);
  });

export default router;

