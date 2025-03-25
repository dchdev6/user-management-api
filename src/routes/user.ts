
router.delete("/users/:id", async (req, res) => {
    try {
        const userRepository = getRepository(User);
        const userId = req.params.id;

        // Delete the user by ID
        const result = await userRepository.delete(userId);

        // If no rows were affected, the user wasn't found
        if (result.affected === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        // Successful deletion
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: "Internal server error" });
    }
});

