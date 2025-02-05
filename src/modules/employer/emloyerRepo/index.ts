import { Prisma, PrismaClient } from "@prisma/client";

class EmployerRepository {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async createEmployer(data: Prisma.EmployerCreateInput) {
    return await this.prisma.employer.create({ data });
  }
  async createJobPosting(data: Prisma.JobPostingsCreateInput) {
    return await this.prisma.jobPostings.create({ data });
  }
  async getAllEmpoyerJobPostings(employerId: number) {
    return await this.prisma.jobPostings.findMany({
      where: {
        employerId,
      },
      select: {
        id: true,
        jobTitle: true,
        jobType: true,
        createdAt: true,
      },
    });
  }
  async getJobPostingDetails(jobPostingId: number) {
    return await this.prisma.jobPostings.findUnique({
      where: {
        id: jobPostingId,
      },
    });
  }
}

export default EmployerRepository;
