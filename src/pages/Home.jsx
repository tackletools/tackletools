import Hero from "../components/Hero";
import Features from "../components/Features";
import WorkFlow from "../components/WorkFlow";
import Testimonials from "../components/Testimonials";
import Process from "../components/Process";

const Home = () => {
  return (
    <div>
      <Hero />
      <WorkFlow/>
      <Process />
      <Features/>
      <Testimonials/>
    </div>
  );
};

export default Home;