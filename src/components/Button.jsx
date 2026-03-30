import { useEffect, useState } from "react";

export default function Button({
  children,
  variant = "base",
  className = "",
  ...props
}) {
  const base =
    "px-3 py-2 rounded-md font-bold font-body transition duration-200 hover:cursor-pointer";

  const variants = {
    // MAIN CTA
    primary:
      "bg-primary text-background hover:bg-primary/85 active:scale-95",

    // SECONDARY ACTIONS
    secondary:
      "bg-secondary text-text hover:bg-secondary/80 active:scale-95",

    // ACCENT (light highlight only)
    accent:
      "bg-accent/15 border border-accent/40 text-text hover:bg-accent/25",

    // ADD TO CART → should feel clickable but not overpower checkout
    addToCart:
      "w-full py-2.5 bg-secondary text-text hover:bg-secondary/80 active:scale-95 text-sm",

    carousel:
      "bg-background/60 border border-text/10 hover:bg-background/80",

    scrollTop:
      "fixed bottom-6 right-6 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-primary text-background shadow-lg hover:bg-primary/80 active:scale-90 transition duration-200",
  };

  return (
    <button {...props} className={`${variant === "scrollTop" ? "" : base} ${variants[variant] ?? ""} ${className}`}>
      {children}
    </button>
  );
}

// Separate named export — self-contained scroll-to-top button
export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Button
      variant="scrollTop"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04L10.75 5.612V16.25A.75.75 0 0 1 10 17Z"
          clipRule="evenodd"
        />
      </svg>
    </Button>
  );
}