import { useNavigate } from "react-router-dom";
import { MatrixRain } from "../components/MatrixRain";
import { ProjectsPage } from "../components/ProjectsPage";

export function Projects() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen" style={{ background: "#0a0e27" }}>
      <MatrixRain />
      <div className="relative z-10">
        <ProjectsPage onBackToHome={() => navigate("/")} />
      </div>
    </div>
  );
}
