import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { CommandTerminal } from "./CommandTerminal";

export function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const handleNavigate = (page: "home" | "projects" | "about" | "skills" | "contact") => {
    if (page === "home") {
      navigate("/");
    } else {
      navigate(`/${page}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0e27] text-white">
      <main className="flex-grow">{children}</main>
      <CommandTerminal />
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
