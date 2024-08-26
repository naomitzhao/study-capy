import { Router, Request, Response } from "express";
import { createUserController, 
    deleteUserController, 
    getAllUsersController, 
    getUserController, 
    updateUserController, 
    validateCreateUser
} from "../controllers/usersController.js";

const usersRouter = Router();

usersRouter.get("/", (req: Request, res: Response) => getAllUsersController(req, res));
usersRouter.get("/:id", (req: Request, res: Response) => getUserController(req, res));
usersRouter.post("/", validateCreateUser, (req: Request, res: Response) => createUserController(req, res));
usersRouter.put("/:id", (req: Request, res: Response) => updateUserController(req, res));
usersRouter.delete("/:id", (req: Request, res: Response) => deleteUserController(req, res));

export default usersRouter;