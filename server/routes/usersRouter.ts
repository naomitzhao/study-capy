import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
    res.send("get all users");
});
usersRouter.get("/:id", (req, res) => {
    res.send(`get user ${req.params.id}`);
});
usersRouter.post("/", (req, res) => {
    res.send(req.body);
});
usersRouter.put("/:id", (req, res) => {
    res.send(`edit user ${req.params.id}`);
});

export default usersRouter;