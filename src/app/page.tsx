import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ChatBar from "@/components/ChatBar";

export default function Home() {
  return (
    <div className="flex h-full flex-col">
      <Nav />
      <Hero />
      <ChatBar />
    </div>
  );
}
