import { useNavigate } from "react-router-dom";
import { MatrixRain } from "../components/MatrixRain";
import { ContactPage } from "../components/ContactPage";

export function Contact() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen" style={{ background: "#0a0e27" }}>
      <MatrixRain />
      <div className="relative z-10">
        <ContactPage onBackToHome={() => navigate("/")} />
      </div>
    </div>
  );
}
