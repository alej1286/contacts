import { Route, Routes } from "react-router-dom";

import { Amplify } from "aws-amplify";
import {
  Authenticator,
  Image,
  useTheme,
  View,
  Text,
} from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@aws-amplify/ui-react/styles.css";

import SiteFooter from "./components/Common/SiteFooter";
import SiteNav from "./components/Common/SiteNav";
import HomePage from "./components/home/HomePage";
/* import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage"; */
import Contacts from "./components/contacts/Contacts";

Amplify.configure(awsExports);

function App() {
  const components = {
    Header() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image alt="Contacts App" src="/image/logo.png" />
        </View>
      );
    },
    Footer() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>&copy; Alex 2023 </Text>
        </View>
      );
    },
  };
  return (
    <Authenticator loginMechanisms={["email"]} components={components}>
      {({ signOut, user }) => (
        <div>
          <SiteNav logOut={signOut} />
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/" exact={true} element={<HomePage />} />
            {/*  <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} /> */}
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <SiteFooter />
        </div>
      )}
    </Authenticator>
  );
}

export default App;
