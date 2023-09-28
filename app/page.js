import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutMe from "@/components/Aboutme";

import Services from "@/components/Services";
import ProfSchool from "@/components/ProfSchool";
import Team from "@/components/Team";
import Questions from "@/components/Questions";
import Departments from "@/components/Departments";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />

      <AboutMe />
      {/* <Services /> */}
      <Blog />
      <Departments />
      <ProfSchool />

     
    </main>
  );
}
