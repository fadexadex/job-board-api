import { Prisma, PrismaClient } from "@prisma/client";

class JobSeekerRepository {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async createJobSeeker(data: Prisma.JobSeekerProfileCreateInput) {
    return await this.prisma.jobSeekerProfile.create({ data });
  }

  async getAllJobPostings() {
    return await this.prisma.jobPostings.findMany({
      select: {
        id: true,
        jobTitle: true,
        jobType: true,
        minSalary: true,
        maxSalary: true,
        locations: true,
        requiredSkills: true,
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

export default JobSeekerRepository;
