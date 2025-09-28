
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import Input from "./components/Input";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <WelcomeMessage />
      <Input />
      <Footer />
    </div>
  );
};

export default App;
