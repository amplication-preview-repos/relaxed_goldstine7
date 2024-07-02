import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ResetPasswordWhereInput = {
  confirmPassword?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  newPassword?: StringNullableFilter;
};
