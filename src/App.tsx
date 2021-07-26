import React from "react";

import GlobalStyle from "./styles/global";

import SigUp from "./pages/SignUp";

const App: React.FC = () => {
  return (
    <>
      <SigUp />
      <GlobalStyle />
    </>
  );
};

export default App;
