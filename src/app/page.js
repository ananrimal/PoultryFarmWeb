import Hero from "./components/Home/Hero";
import Features from "./components/Home/SplitFeature";
import CalloutSplit from "./components/Home/CalloutSplit";
import IconBox from "./components/Home/IconBox";
import Stats from "./components/Home/Stats";
import Gallery from "./components/Home/Gallery";
import Testimonials from "./components/Home/Testimonials";
import Blog from "./components/Home/Blog";
import CTAbanner from "./components/Home/CTAbanner";
export default function Home() {
  return (
      <>

      <main>
       <Hero/>
       <Features/>
       <CalloutSplit/>
       <IconBox/>
       <Stats/>
       <Gallery/>
       <Testimonials/>
       <Blog/>
       <CTAbanner/>
      </main>
</>
  );
}
