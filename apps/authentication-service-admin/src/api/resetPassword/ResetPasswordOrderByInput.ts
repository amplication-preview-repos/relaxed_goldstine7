import { SortOrder } from "../../util/SortOrder";

export type ResetPasswordOrderByInput = {
  confirmPassword?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  newPassword?: SortOrder;
  updatedAt?: SortOrder;
};
