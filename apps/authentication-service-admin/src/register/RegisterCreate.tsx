import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const RegisterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="confirmPassword" source="confirmPassword" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="password" source="password" />
      </SimpleForm>
    </Create>
  );
};
