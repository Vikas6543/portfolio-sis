import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/components/sections/Home";
import Work from "@/components/sections/Work";
import Testimonials from "@/components/sections/Testimonials";
import Resume from "@/components/sections/Resume";
import MotionReveal from "@/components/MotionReveal";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-10">
        <MotionReveal>
          <Home />
        </MotionReveal>
        <MotionReveal>
          <Work />
        </MotionReveal>
        <MotionReveal>
          <Testimonials />
        </MotionReveal>
        <MotionReveal>
          <Resume />
        </MotionReveal>
      </main>
      <Footer />
    </>
  );
}
