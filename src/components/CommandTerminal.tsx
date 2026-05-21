import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const TERMINAL_HEIGHT = 260;
const HEADER_HEIGHT = 38;
const INPUT_HEIGHT = 34;

const initialLines = ["Welcome to PORTFOLIO TERMINAL. Type help for a list of commands."];

const helpLines = [
  "Available commands:",
  "  help      Show this help message",
  "  clear     Clear terminal output",
  "  home      Navigate to home",
  "  about     Navigate to about page",
  "  projects  Navigate to projects",
  "  skills    Navigate to skills",
  "  contact   Navigate to contact",
];

const navigationCommands: Record<string, string> = {
  home: "/",
  about: "/about",
  projects: "/projects",
  skills: "/skills",
  contact: "/contact",
};

function isEditableElement(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;

  const tagName = target.tagName.toLowerCase();

  return tagName === "input" || tagName === "textarea" || tagName === "select" || (target instanceof HTMLElement && target.isContentEditable);
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
        if (!isOpen && isEditableElement(event.target)) return;

        event.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const focusInput = () => {
      inputRef.current?.focus();
    };

    requestAnimationFrame(focusInput);
    const timeoutId = window.setTimeout(focusInput, 120);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isOpen]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (rawValue: string) => {
    const trimmed = rawValue.trim();

    if (!trimmed) return;

    const commandName = trimmed.toLowerCase();

    if (commandName === "clear") {
      setOutput([]);
      setCommand("");
      return;
    }

    setOutput((current) => [...current, `andrea@portfolio:~$ ${trimmed}`]);
    setCommand("");

    if (commandName === "help") {
      setOutput((current) => [...current, ...helpLines]);
      return;
    }

    const route = navigationCommands[commandName];

    if (route) {
      navigate(route);
      setIsOpen(false);
      return;
    }

    setOutput((current) => [...current, "Command not found. Type help."]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCommand(command);
  };

  return (
    <>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ y: TERMINAL_HEIGHT }}
            animate={{ y: 0 }}
            exit={{ y: TERMINAL_HEIGHT }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            style={{
              position: "fixed",
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 99999,
              width: "100%",
              height: `${TERMINAL_HEIGHT}px`,
              maxHeight: `${TERMINAL_HEIGHT}px`,
              overflow: "hidden",
              background: "#000000",
              backgroundColor: "#000000",
              opacity: 1,
              pointerEvents: "auto",
              isolation: "isolate",
              borderTop: "1px solid rgba(34, 211, 238, 0.7)",
              boxShadow: "0 -10px 40px rgba(0, 255, 255, 0.14)",
              fontFamily: "Consolas, 'Courier New', ui-monospace, SFMono-Regular, Menlo, Monaco, monospace",
            }}
          >
            <div
              style={{
                width: "100%",
                height: `${TERMINAL_HEIGHT}px`,
                maxHeight: `${TERMINAL_HEIGHT}px`,
                overflow: "hidden",
                background: "#000000",
                backgroundColor: "#000000",
                color: "#d1d5db",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: `${HEADER_HEIGHT}px`,
                  minHeight: `${HEADER_HEIGHT}px`,
                  maxHeight: `${HEADER_HEIGHT}px`,
                  background: "#000000",
                  backgroundColor: "#000000",
                  borderBottom: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 12px",
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      color: "#22d3ee",
                      fontSize: "11px",
                      lineHeight: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                    }}
                  >
                    PORTFOLIO TERMINAL
                  </div>
                  <div
                    style={{
                      color: "#94a3b8",
                      fontSize: "11px",
                      lineHeight: "12px",
                      marginTop: "2px",
                    }}
                  >
                    andrea@portfolio:~
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close terminal"
                  style={{
                    width: "28px",
                    height: "28px",
                    background: "#000000",
                    backgroundColor: "#000000",
                    color: "#e5e7eb",
                    border: "1px solid rgba(255,255,255,0.18)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <X size={15} />
                </button>
              </div>

              <div
                onClick={focusInput}
                style={{
                  height: `${TERMINAL_HEIGHT - HEADER_HEIGHT}px`,
                  maxHeight: `${TERMINAL_HEIGHT - HEADER_HEIGHT}px`,
                  minHeight: 0,
                  overflow: "hidden",
                  background: "#000000",
                  backgroundColor: "#000000",
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px 12px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    flex: "1 1 auto",
                    minHeight: 0,
                    overflowY: "auto",
                    overflowX: "hidden",
                    background: "#000000",
                    backgroundColor: "#000000",
                    color: "#d1d5db",
                    fontSize: "13px",
                    lineHeight: "18px",
                    paddingRight: "8px",
                  }}
                >
                  {output.length === 0 ? (
                    <div style={{ color: "#64748b" }}>Terminal cleared. Type help for commands.</div>
                  ) : (
                    output.map((line, index) => (
                      <div
                        key={`${line}-${index}`}
                        style={{
                          whiteSpace: "pre-wrap",
                          overflowWrap: "break-word",
                        }}
                      >
                        {line}
                      </div>
                    ))
                  )}
                </div>

                <form
                  onSubmit={handleSubmit}
                  style={{
                    flex: `0 0 ${INPUT_HEIGHT}px`,
                    height: `${INPUT_HEIGHT}px`,
                    minHeight: `${INPUT_HEIGHT}px`,
                    maxHeight: `${INPUT_HEIGHT}px`,
                    background: "#000000",
                    backgroundColor: "#000000",
                    borderTop: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    paddingTop: "6px",
                    marginTop: "8px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      color: "#22d3ee",
                      fontSize: "13px",
                      lineHeight: "13px",
                      fontWeight: 700,
                    }}
                  >
                    andrea@portfolio:~$
                  </span>

                  <input
                    ref={inputRef}
                    type="text"
                    value={command}
                    onChange={(event) => setCommand(event.target.value)}
                    onClick={(event) => {
                      event.stopPropagation();
                      inputRef.current?.focus();
                    }}
                    style={{
                      flex: "1 1 auto",
                      minWidth: 0,
                      width: "100%",
                      height: "22px",
                      background: "#000000",
                      backgroundColor: "#000000",
                      color: "#f8fafc",
                      border: "none",
                      outline: "none",
                      padding: 0,
                      margin: 0,
                      pointerEvents: "auto",
                      caretColor: "#22d3ee",
                      fontFamily: "Consolas, 'Courier New', ui-monospace, SFMono-Regular, Menlo, Monaco, monospace",
                      fontSize: "13px",
                      lineHeight: "13px",
                    }}
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
        )}
      </AnimatePresence>

      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          style={{
            position: "fixed",
            right: "16px",
            bottom: "16px",
            zIndex: 9999,
            background: "#000000",
            backgroundColor: "#000000",
            color: "#e5e7eb",
            border: "1px solid rgba(34, 211, 238, 0.45)",
            padding: "8px 10px",
            fontFamily: "Consolas, 'Courier New', ui-monospace, SFMono-Regular, Menlo, Monaco, monospace",
            fontSize: "12px",
            boxShadow: "0 0 30px rgba(0,255,255,0.12)",
            cursor: "pointer",
          }}
        >
          <span style={{ color: "#22d3ee" }}>Ctrl + Shift + K</span> Terminal
        </button>
      )}
    </>
  );
}
