import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ResetPasswordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="confirmPassword" source="confirmPassword" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="newPassword" source="newPassword" />
      </SimpleForm>
    </Edit>
  );
};
