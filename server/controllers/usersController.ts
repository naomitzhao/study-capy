import { Request, Response } from 'express';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../services/usersService.js';
import { body, validationResult } from "express-validator";

/**
 * 
 * @param req Express request
 * @param res Express response
 */
export const getAllUsersController = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();
        res.status(200).json({
            success: true,
            data: users,
        });
    } catch (e: unknown) {
        if (e instanceof Error){
            res.status(400).json({
                success: false,
                message: e.message,
            })
        } else {
            res.status(400).json({
                success: false,
                message: "couldn't get error message"
            })
        }
    }
};

/**
 * 
 * @param req Express request
 * @param res Express response
 */
export const getUserController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const user = await getUserById(id);
        res.status(200).json({
            success: true,
            data: user,
        });
    } catch (e: unknown) {
        if (e instanceof Error){
            res.status(400).json({
                success: false,
                message: e.message,
            })
        } else {
            res.status(400).json({
                success: false,
                message: "couldn't get error message"
            })
        }
    }
};

export const validateCreateUser = [
    body("username").trim().notEmpty().withMessage("Username cannot be empty."),
    body("email").trim().notEmpty().withMessage("Email cannot be empty."),
];

/**
 * 
 * @param req Express request
 * @param res Express response
 */
export const createUserController = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // return so no other responses can be sent
        return res.status(400).json({
            success: false,
            message: errors
        });
    }
    try {
        const email: string = req.body.email;
        const username: string = req.body.username;
        const password: string = req.body.password;
        const user = await createUser(email, username, password);
        res.status(200).json({
            success: true,
            data: user,
        });
    } catch (e: unknown) {
        if (e instanceof Error){
            res.status(400).json({
                success: false,
                message: e.message,
            })
        } else {
            res.status(400).json({
                success: false,
                message: "couldn't get error message"
            })
        }
    }
};

/**
 * 
 * @param req Express request
 * @param res Express response
 */
export const updateUserController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        if (req.body.hasOwnProperty("username")) {
            await updateUser(id, "username", req.body.username);
            res.status(200).json({
                success: true,
            });
        } else if (req.body.hasOwnProperty("email")) {
            await updateUser(id, "email", req.body.email);
            res.status(200).json({
                success: true,
            });
        } else {
            throw Error("Can only update username or email.")
        }
    } catch (e: unknown) {
        if (e instanceof Error){
            res.status(400).json({
                success: false,
                message: e.message,
            })
        } else {
            res.status(400).json({
                success: false,
                message: "couldn't get error message"
            })
        }
    }
};

/**
 * 
 * @param req Express request
 * @param res Express response
 */
export const deleteUserController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        await deleteUser(id);
        res.status(200).json({
            success: true
        });
    } catch (e: unknown) {
        if (e instanceof Error){
            res.status(400).json({
                success: false,
                message: e.message,
            })
        } else {
            res.status(400).json({
                success: false,
                message: "couldn't get error message"
            })
        }
    }
}