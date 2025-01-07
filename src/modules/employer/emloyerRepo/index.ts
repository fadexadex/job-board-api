import { PrismaClient } from "@prisma/client";
import { IEmployerCreate } from "utils/types";

class EmployerRepository {
    private prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient();
    }
    async createEmployer(data: IEmployerCreate) {
        return await this.prisma.employer.create({ data });
    }
} 