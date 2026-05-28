import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ChatBar from "@/components/ChatBar";
import { About, Tokenomics, Roadmap, Footer } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Tokenomics />
        <Roadmap />
        <Footer />
      </main>
      <ChatBar />
    </>
  );
}
