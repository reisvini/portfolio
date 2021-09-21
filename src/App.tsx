import { AboutMe } from './components/AboutMe';
import Contact from './components/Contact';
import { Experiences } from './components/Experiences';
import { Header } from './components/Header';
import { Stacks } from './components/Stacks';

export default function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Experiences />
      <Stacks />
      <Contact />
    </div>
  );
}
