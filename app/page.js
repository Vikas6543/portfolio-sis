import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/components/sections/Home";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Resume from "@/components/sections/Resume";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-10">
        <Home />
        <Work />
        {/* <About /> */}
        <Testimonials />
        <Resume />
      </main>
      <Footer />
    </>
  );
}
