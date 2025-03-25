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

  router.get("/users", async (_req, res) => {
    const userRepository = getRepository(User);
    const users = await userRepository.find();
    res.json(users);
  });
  
  router.get("/users/:id", async (req, res) => {
    const userRepository = getRepository(User);
    const userId = Number(req.params.id);
    const user = await userRepository.findOne({
        where: { id: userId },
    });

    
    res.json(user);
});

export default router;
