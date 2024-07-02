import * as graphql from "@nestjs/graphql";
import { ResetPasswordResolverBase } from "./base/resetPassword.resolver.base";
import { ResetPassword } from "./base/ResetPassword";
import { ResetPasswordService } from "./resetPassword.service";

@graphql.Resolver(() => ResetPassword)
export class ResetPasswordResolver extends ResetPasswordResolverBase {
  constructor(protected readonly service: ResetPasswordService) {
    super(service);
  }
}
