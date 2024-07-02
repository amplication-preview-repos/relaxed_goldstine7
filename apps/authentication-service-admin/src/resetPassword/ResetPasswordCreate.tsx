import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ResetPasswordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="confirmPassword" source="confirmPassword" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="newPassword" source="newPassword" />
      </SimpleForm>
    </Create>
  );
};
