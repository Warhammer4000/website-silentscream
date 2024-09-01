import About from "./components/About";
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
        <Steam/>
        {/*Screenshot Section */}
        <Team/>
      </div>
    </div>
  );
}
