import { Router, Request, Response } from "express";
import { createRecordController, deleteRecordController, getAllRecordsController, getRecordController, updateRecordController } from "../controllers/recordsController.js";



const recordsRouter = Router();

recordsRouter.get("/", (req: Request, res: Response) => getAllRecordsController(req, res));
recordsRouter.get("/:id", (req: Request, res: Response) => getRecordController(req, res));
recordsRouter.post("/", (req: Request, res: Response) => createRecordController(req, res));
recordsRouter.put("/:id", (req: Request, res:Response) => updateRecordController(req, res));
recordsRouter.delete("/:id", (req: Request, res: Response) => deleteRecordController(req, res));

export default recordsRouter;