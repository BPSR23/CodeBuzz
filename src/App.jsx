import React from "react";
import AppContextProvider from "./AppContext";
import AppRouter from "./components/AppRouter";
import AuthContextProvider from "./contexts/AuthContext";

function App(props) {
  return (
    <AppContextProvider>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </AppContextProvider>
  );
}

export default App;
