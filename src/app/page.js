import About from "./components/About";
import AboutStudio from "./components/AboutStudio";
import Director from "./components/Director";
import Hero from "./components/Hero";
import Screenshots from "./components/Screenshots";
import Steam from "./components/Steam";
import Team from "./components/Team";

export default function Home() {
  return (
    <div>
      <div className="md:min-h-screen">
        {/* Hero Section */}
        <Hero/>
      </div>
      <div>
        {/*About Section */}
        <About/>

        {/*Diretor Section */}
        <Director/>

        {/*Screenshot Section */}
        <Screenshots/>

        {/*Steam Section */}
        <Steam />

        {/*Team Section */}
        <Team/>

        {/*Studio About Section */}
        <AboutStudio/>
      </div>
    </div>
  );
}
