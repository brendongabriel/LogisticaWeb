import React from "react";

import GlobalStyle from "./styles/global";

//import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";

const App: React.FC = () => {
  return(
    <>
      <SignUp/>
      <GlobalStyle/>
    </>
  );
};

export default App;
