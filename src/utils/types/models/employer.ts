// userId       Int          @unique
// companyName  String?
// companySize  Int?
// industry     String?
// user         User         @relation(fields: [userId], references: [id])

export interface IEmployerCreate {
  companyName?: string;
  companySize?: number;
  industry?: string;
  userId: number;
}
