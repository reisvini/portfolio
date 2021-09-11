import { useContext, useState } from "react";
import { AboutMe } from "./components/AboutMe";
import { Experiences } from "./components/Experiences";
import { Header } from "./components/Header";
import { Stacks } from "./components/Stacks";



export default function App() {

  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Experiences />
      <Stacks />
    </div>
  );
}

