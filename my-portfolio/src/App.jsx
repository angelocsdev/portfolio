
import styles from "./App.module.css";
import About from "./components/About/About";
import Hardskills from "./components/Hardskills/Hardskills";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {


  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Hardskills />
    </div>
  )
}

export default App
