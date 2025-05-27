
import Projects from '../components/Projects.jsx';
import Experience from './Experience.jsx';
import Hero from "./Hero";

function Home() {
  return (
    <>
    <section id="hero"><Hero /></section>
    <section id="about"><Projects /></section>
    <section id="experience"><Experience /></section>
    </>
  );
}

export default Home;
