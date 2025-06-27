import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import WorkFlow from "../components/WorkFlow";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <WorkFlow/>
      <FeatureSection/>
      <Testimonials/>
    </div>
  );
};

export default Home;