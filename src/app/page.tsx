import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { GithubSection } from "@/components/sections/github-section";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <GithubSection />
      <Contact />
    </>
  );
}
