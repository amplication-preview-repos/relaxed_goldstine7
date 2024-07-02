import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ResetPasswordList } from "./resetPassword/ResetPasswordList";
import { ResetPasswordCreate } from "./resetPassword/ResetPasswordCreate";
import { ResetPasswordEdit } from "./resetPassword/ResetPasswordEdit";
import { ResetPasswordShow } from "./resetPassword/ResetPasswordShow";
import { LoginList } from "./login/LoginList";
import { LoginCreate } from "./login/LoginCreate";
import { LoginEdit } from "./login/LoginEdit";
import { LoginShow } from "./login/LoginShow";
import { RegisterList } from "./register/RegisterList";
import { RegisterCreate } from "./register/RegisterCreate";
import { RegisterEdit } from "./register/RegisterEdit";
import { RegisterShow } from "./register/RegisterShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AuthenticationService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ResetPassword"
          list={ResetPasswordList}
          edit={ResetPasswordEdit}
          create={ResetPasswordCreate}
          show={ResetPasswordShow}
        />
        <Resource
          name="Login"
          list={LoginList}
          edit={LoginEdit}
          create={LoginCreate}
          show={LoginShow}
        />
        <Resource
          name="Register"
          list={RegisterList}
          edit={RegisterEdit}
          create={RegisterCreate}
          show={RegisterShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
