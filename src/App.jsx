import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./heading";
import Form from "./form";
import Page from "./page"

function App() {
  return (
    <div>
      <div class="child">
      <Header />
      <Form />
      </div>
      <Page/>
    </div>
  );
}

export default App;
