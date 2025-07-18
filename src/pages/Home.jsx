import Hero from "../components/Hero";
import Features from "../components/Features";
import WorkFlow from "../components/WorkFlow";
import Testimonials from "../components/Testimonials";
import Process from "../components/Process";
import { HelmetTags } from '../utils/HelmetMetaTags.jsx';

const Home = () => {
  return (
   <>
   {HelmetTags.Home}
   
    <div>
      <Hero />
      <WorkFlow/>
      <Process />
      <Features/>
      <Testimonials/>
    </div>
   </>
  );
};

export default Home;