import { Module } from "@nestjs/common";
import { ResetPasswordModuleBase } from "./base/resetPassword.module.base";
import { ResetPasswordService } from "./resetPassword.service";
import { ResetPasswordController } from "./resetPassword.controller";
import { ResetPasswordResolver } from "./resetPassword.resolver";

@Module({
  imports: [ResetPasswordModuleBase],
  controllers: [ResetPasswordController],
  providers: [ResetPasswordService, ResetPasswordResolver],
  exports: [ResetPasswordService],
})
export class ResetPasswordModule {}
