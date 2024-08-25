import About from "./components/About";
import Director from "./components/Director";
import Hero from "./components/Hero";

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
        {/*Next Section */}
        <Director/>
      </div>
    </div>
  );
}
