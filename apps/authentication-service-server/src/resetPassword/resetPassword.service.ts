import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResetPasswordServiceBase } from "./base/resetPassword.service.base";

@Injectable()
export class ResetPasswordService extends ResetPasswordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
