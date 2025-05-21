import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-sans transition-all duration-300">
      {/* Dark Mode Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <DarkModeToggle />
      </div>

      {/* Sections */}
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
