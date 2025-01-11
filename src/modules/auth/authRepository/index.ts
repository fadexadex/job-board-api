import { Prisma, PrismaClient } from "@prisma/client";


class AuthRepository {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async createUser(data: Prisma.UserCreateInput) {
    return await this.prisma.user.create({ data });
  }
  async getUserByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email }, include:{employer: true, jobSeeker: true} });
  }
} 

export default AuthRepository;
