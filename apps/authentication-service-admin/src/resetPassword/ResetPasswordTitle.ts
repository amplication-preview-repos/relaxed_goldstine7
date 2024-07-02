import { ResetPassword as TResetPassword } from "../api/resetPassword/ResetPassword";

export const RESETPASSWORD_TITLE_FIELD = "confirmPassword";

export const ResetPasswordTitle = (record: TResetPassword): string => {
  return record.confirmPassword?.toString() || String(record.id);
};
