import { Prisma, PrismaClient } from "@prisma/client";
import { IFilter, IJobSeeker } from "utils/types";

class JobSeekerRepository {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async createJobSeeker(data: Prisma.JobSeekerProfileCreateInput) {
    return await this.prisma.jobSeekerProfile.create({ data });
  }

  async getAllJobPostings(filterObj: IFilter) {
    return await this.prisma.jobPostings.findMany({
      where: {
        ...(filterObj.jobType && { jobType: filterObj.jobType }),
        ...(filterObj.minSalary && { minSalary: { gte: filterObj.minSalary } }),
        ...(filterObj.maxSalary && { maxSalary: { lte: filterObj.maxSalary } }),
        ...(filterObj.location && {
          locations: { hasSome: filterObj.location },
        }),
      },
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

  async createJobApplicationWithProfile(
    jobPostingId: string,
    jobSeekerProfile: IJobSeeker
  ) {
    return await this.prisma.applications.create({
      data: {
        jobId: parseInt(jobPostingId),
        jobSeekerId: jobSeekerProfile.id,
      },
    });
  }

  async getJobSeekerProfile(jobSeekerId: number) {
    return await this.prisma.jobSeekerProfile.findUnique({
      where: {
        id: jobSeekerId,
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
