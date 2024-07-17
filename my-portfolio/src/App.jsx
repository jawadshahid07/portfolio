import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-white-200 selection:text-black-200">
      <div className="fixed top-0 z-[-10] h-full w-full"></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse 80% 80% at 50% -20%, rgba(20, 20, 20, 0.8), rgba(0, 0, 0, 0.2))]"></div>
      <div className="container mx-auto px-8">
        <Header />
        <Hero/>
      </div>
    </div>
  );
}
