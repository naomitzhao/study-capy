import { Router } from "express";

const recordsRouter = Router();

recordsRouter.get("/", (req, res) => {
    res.send("get all records");
});
recordsRouter.get("/:id", (req, res) => {
    res.send(`get record ${req.params.id}`);
});
recordsRouter.post("/", (req, res) => {
    res.json(req.body);
});
recordsRouter.delete("/:id", (req, res) => {
    res.send(`delete record ${req.params.id}`);
});

export default recordsRouter;