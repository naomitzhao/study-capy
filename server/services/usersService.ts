import { PrismaClient } from "@prisma/client";
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
export async function getUser(id: number) {
    return await prisma.users.findUnique({
        where: {
            user_id: id
        },
    });
}

/**
 * Create a new user in the database.
 * @param email The email of the new user.
 * @param username The username of the new user.
 */
export async function createUser(email: string, username: string) {
    await prisma.users.create({
        data: {
            email,
            username
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
        await updateUserUsername(id, value);
    } else if (field === "email") {
        await updateUserEmail(id, value);
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
            user_id: id
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
            user_id: id
        },
        data: {
            email
        }
    });
}

export async function deleteUser(id: number) {
    await prisma.users.delete({
        where: {
            user_id: id
        }
    })
}