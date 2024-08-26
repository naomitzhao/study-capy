import { Request, Response } from 'express';
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../services/usersService.js';
// import { body, validationResult } from "express-validator";

/**
 * 
 * @param req Express request
 * @param res Express response
 */
export const getAllUsersController = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();
        res.status(200).send(users);
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
        const user = await getUser(id);
        res.status(200).send(user);
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
export const createUserController = async (req: Request, res: Response) => {
    try {
        const email: string = req.body.email;
        const username: string = req.body.username;
        const user = await createUser(email, username);
        res.status(200).send(user);
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
            const user = updateUser(id, "username", req.body.username);
            res.status(200).send(user);
        } else if (req.body.hasOwnProperty("email")) {
            const user = updateUser(id, "email", req.body.email);
            res.status(200).send(user);
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
        res.status(200).send(id);
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