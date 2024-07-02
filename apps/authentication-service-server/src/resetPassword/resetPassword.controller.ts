import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ResetPasswordService } from "./resetPassword.service";
import { ResetPasswordControllerBase } from "./base/resetPassword.controller.base";

@swagger.ApiTags("resetPasswords")
@common.Controller("resetPasswords")
export class ResetPasswordController extends ResetPasswordControllerBase {
  constructor(protected readonly service: ResetPasswordService) {
    super(service);
  }
}
