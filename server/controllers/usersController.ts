import { Request, Response } from 'express';
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../services/usersService.js';
// import { body, validationResult } from "express-validator";

/**
 * 
 * @param req Express request
 * @param res Express response
 */
export const getAllUsersController = async (req: Request, res: Response) => {
    const users = await getAllUsers();
    res.status(200).send(users);
};

/**
 * 
 * @param req Express request
 * @param res Express response
 */
export const getUserController = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const user = await getUser(id);
    res.status(200).send(user);
};

/**
 * 
 * @param req Express request
 * @param res Express response
 */
export const createUserController = async (req: Request, res: Response) => {
    const email: string = req.body.email;
    const username: string = req.body.username;
    await createUser(email, username);
    res.status(200).send('success');
};

/**
 * 
 * @param req Express request
 * @param res Express response
 */
export const updateUserController = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    if (req.body.hasOwnProperty("username")) {
        updateUser(id, "username", req.body.username);
        res.status(200).send('successfully updated username');
    } else if (req.body.hasOwnProperty("email")) {
        updateUser(id, "email", req.body.email);
        res.status(200).send('successfully updated email');
    } else {
        res.status(400).send('unsuccessful');
    }
};

/**
 * 
 * @param req Express request
 * @param res Express response
 */
export const deleteUserController = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    await deleteUser(id);
    res.status(200).send("successful");
}