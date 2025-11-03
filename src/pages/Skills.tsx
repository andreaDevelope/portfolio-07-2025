import { useNavigate } from "react-router-dom";
import { MatrixRain } from "../components/MatrixRain";
import { SkillsPage } from "../components/SkillsPage";

export function Skills() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen" style={{ background: "#0a0e27" }}>
      <MatrixRain />
      <div className="relative z-10">
        <SkillsPage onBackToHome={() => navigate("/")} />
      </div>
    </div>
  );
}
