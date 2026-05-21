import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const initialLines = [
  "Welcome to PORTFOLIO TERMINAL. Type help for a list of commands.",
];

const helpLines = [
  "Available commands:",
  "  help     Show this help message",
  "  clear    Clear terminal output",
  "  home     Navigate to home",
  "  about    Navigate to about page",
  "  projects Navigate to projects",
  "  skills   Navigate to skills",
  "  contact  Navigate to contact",
];

const navigationCommands: Record<string, string> = {
  home: "/",
  about: "/about",
  projects: "/projects",
  skills: "/skills",
  contact: "/contact",
};

function isEditableElement(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return false;
  }

  const tagName = target.tagName.toLowerCase();
  if (tagName === "input" || tagName === "textarea" || tagName === "select") {
    return true;
  }

  if (target.isContentEditable) {
    return true;
  }

  return false;
}

export function CommandTerminal() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<string[]>(initialLines);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "k") {
        if (isEditableElement(event.target)) {
          return;
        }

        event.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [isOpen]);

  const pushOutput = (line: string) => {
    setOutput((current) => [...current, line]);
  };

  const handleCommand = (rawValue: string) => {
    const trimmed = rawValue.trim();
    if (!trimmed) {
      return;
    }

    pushOutput(`andrea@portfolio:~$ ${trimmed}`);
    setCommand("");

    const commandName = trimmed.toLowerCase();

    if (commandName === "help") {
      setOutput((current) => [...current, ...helpLines]);
      return;
    }

    if (commandName === "clear") {
      setOutput([]);
      return;
    }

    if (navigationCommands[commandName]) {
      navigate(navigationCommands[commandName]);
      setIsOpen(false);
      return;
    }

    pushOutput("Command not found. Type help.");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCommand(command);
  };

  return (
    <>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-4 sm:px-6"
          >
            <div
              className="w-full max-w-6xl h-[45vh] md:h-[38vh] max-h-[60vh] rounded-t-3xl border-t border-cyan-400/40 bg-[#050816] shadow-[0_0_80px_rgba(0,255,255,0.15)] backdrop-blur-xl"
              style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace" }}
            >
              <div className="flex items-center justify-between border-b border-cyan-400/20 px-4 py-3 text-sm text-slate-200">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">PORTFOLIO TERMINAL</div>
                  <div className="mt-1 text-base text-white">andrea@portfolio:~</div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10"
                  aria-label="Close terminal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex h-full flex-col overflow-hidden px-4 py-3 sm:px-5">
                <div className="flex-1 overflow-y-auto pr-2 pb-3 text-sm text-slate-200">
                  {output.length === 0 ? (
                    <div className="text-slate-400">Terminal cleared. Type help for commands.</div>
                  ) : (
                    output.map((line, index) => (
                      <div key={`${line}-${index}`} className="whitespace-pre-wrap leading-6 text-slate-200">
                        {line}
                      </div>
                    ))
                  )}
                </div>

                <form onSubmit={handleSubmit} className="flex items-center gap-3 border-t border-cyan-400/10 pt-3">
                  <span className="text-cyan-400">andrea@portfolio:~$</span>
                  <input
                    ref={inputRef}
                    value={command}
                    onChange={(event) => setCommand(event.target.value)}
                    className="flex-1 rounded-xl border border-slate-700 bg-[#0a0e27] px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="Type a command..."
                    spellCheck={false}
                    autoComplete="off"
                    autoCapitalize="none"
                    autoCorrect="off"
                  />
                </form>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!isOpen ? (
        <div className="fixed bottom-4 right-4 z-50 hidden rounded-full border border-cyan-400/30 bg-[#050816]/90 px-4 py-2 text-xs text-slate-200 shadow-[0_0_30px_rgba(0,255,255,0.12)] md:block">
          <span className="text-cyan-300">Ctrl + Shift + K</span> Terminal
        </div>
      ) : null}
    </>
  );
}
