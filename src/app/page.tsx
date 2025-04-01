import HeroSection from "@/Components/HeroSection";

export default function Homepage() {
  return (
    <>
       <main className="flex min-h-screen flex-col bg-[#121212]">
          <div className="container mx-auto py-4 px-12">
          <HeroSection />
          </div>
       </main>
    </>
  );
}
