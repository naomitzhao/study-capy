import { Router, Request, Response } from "express";

const usersRouter = Router();

usersRouter.get("/", (req: Request, res: Response) => {
    res.send("get all users");
});
usersRouter.get("/:id", (req: Request, res: Response) => {
    res.send(`get user ${req.params.id}`);
});
usersRouter.post("/", (req: Request, res: Response) => {
    res.send(req.body);
});
usersRouter.put("/:id", (req: Request, res: Response) => {
    res.send(`edit user ${req.params.id}`);
});

export default usersRouter;