import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function getAllRecords() {
    return await prisma.records.findMany();
}

async function getRecord(id: number) {
    return await prisma.records.findUnique({
        where: {
            record_id: id
        },
    });
}

module.exports = {
    getAllRecords,
    getRecord,
};