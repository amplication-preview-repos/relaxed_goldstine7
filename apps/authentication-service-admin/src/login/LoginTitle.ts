import { Login as TLogin } from "../api/login/Login";

export const LOGIN_TITLE_FIELD = "password";

export const LoginTitle = (record: TLogin): string => {
  return record.password?.toString() || String(record.id);
};
