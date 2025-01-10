import { PrismaClient } from "@prisma/client";
import { ICreateJobPosting, IEmployerCreate } from "utils/types";

class EmployerRepository {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async createEmployer(data: IEmployerCreate) {
    return await this.prisma.employer.create({ data });
  }
  async createJobPosting(data: ICreateJobPosting) {
    return await this.prisma.jobPostings.create({ data });
  }
  async getAllEmpoyerJobPostings(employerId: number) {
    return await this.prisma.jobPostings.findMany({
      where: {
        employerId,
      },
    });
  }
}

export default EmployerRepository;
