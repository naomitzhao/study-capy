import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

/**
 * 
 * @returns An array containing all users in the database.
 */
export async function getAllUsers() {
    return await prisma.users.findMany();
}

/**
 * 
 * @param id User ID of the user to get
 * @returns An object representing the user.
 */
export async function getUserById(id: number) {
    return await prisma.users.findUnique({
        where: {
            id
        },
    });
}

export async function getUserByUsername(username: string) {
    return await prisma.users.findUnique({
        where: {
            username
        },
    });
}

/**
 * Create a new user in the database.
 * @param email The email of the new user.
 * @param username The username of the new user.
 */
export async function createUser(email: string, username: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await prisma.users.create({
        data: {
            email,
            username,
            password: hashedPassword,
        }
    });
}

/**
 * Update a field of a specific user.
 * @param id The ID of the user to update.
 * @param field Which attribute of the user to update. Either "username" or "email"
 * @param value The new value to set the attribute to
 */
export async function updateUser(id: number, field: string, value: string) {
    if (field === "username") {
        return await updateUserUsername(id, value);
    } else if (field === "email") {
        return await updateUserEmail(id, value);
    } else {
        throw Error("can only update username or email");
    }
}

/**
 * Update a specific user's username.
 * @param id The ID of the user to update.
 * @param username The new username to assign the user.
 */
async function updateUserUsername(id: number, username: string) {
    await prisma.users.update({
        where: {
            id
        },
        data: {
            username
        }
    });
}

/**
 * Update a specific user's email.
 * @param id The ID of the user to update.
 * @param email The new email to assign the user.
 */
async function updateUserEmail(id: number, email: string) {
    await prisma.users.update({
        where: {
            id
        },
        data: {
            email
        }
    });
}

/**
 * Delete a user from the users table.
 * @param id The ID of the user to delete.
 */
export async function deleteUser(id: number) {
    await prisma.users.delete({
        where: {
            id
        }
    })
}