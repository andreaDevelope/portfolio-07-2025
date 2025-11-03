import { useNavigate } from "react-router-dom";
import { MatrixRain } from "../components/MatrixRain";
import { AboutPage } from "../components/AboutPage";

export function About() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen" style={{ background: "#0a0e27" }}>
      <MatrixRain />
      <div className="relative z-10">
        <AboutPage onBackToHome={() => navigate("/")} />
      </div>
    </div>
  );
}
