import { useNavigate } from "react-router-dom";
import { MatrixRain } from "../components/MatrixRain";
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { About } from "../components/About";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen" style={{ background: "#0a0e27" }}>
      <MatrixRain />
      <main className="relative z-10">
        <Hero onViewProjects={() => navigate("/projects")} />
        <Skills onViewMore={() => navigate("/skills")} />
        <Projects onViewProjects={() => navigate("/projects")} />
        <About onViewMore={() => navigate("/about")} />
      </main>
    </div>
  );
}
