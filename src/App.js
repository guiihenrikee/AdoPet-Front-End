import { React } from "react";
import Routing from "./components/utils/Routing";
import "../src/components/styles/App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <main>
      <Header login="Entrar" register="Cadastro" />
      <Routing />
      <Footer note="AdoPet" />
    </main>
  );
}

export default App;
