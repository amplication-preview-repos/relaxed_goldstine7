import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LoginCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="password" source="password" />
      </SimpleForm>
    </Create>
  );
};
