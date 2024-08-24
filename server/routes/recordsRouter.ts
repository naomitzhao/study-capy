import { Router, Request, Response } from "express";

const recordsRouter = Router();

recordsRouter.get("/", (req: Request, res: Response) => {
    res.send("get all records");
});
recordsRouter.get("/:id", (req: Request, res: Response) => {
    res.send(`get record ${req.params.id}`);
});
recordsRouter.post("/", (req: Request, res: Response) => {
    res.json(req.body);
});
recordsRouter.delete("/:id", (req: Request, res: Response) => {
    res.send(`delete record ${req.params.id}`);
});

export default recordsRouter;