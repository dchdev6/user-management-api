router.get("/users", async (_req, res) => {
    const userRepository = getRepository(User);
    const users = await userRepository.find();
    res.json(users);
  });
  
  router.get("/users/:id", async (req, res) => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(req.params.id);
    res.json(user);
  });