export default function Button({
  children,
  variant = "base",
  className = "",
  ...props
}) {
  const base = "px-2 py-1.5 rounded-md font-bold font-body text-text backdrop-blur-sm hover:bg-secondary/40 hover:cursor-pointer ";

  const variants = {
    primary: "bg-primary text-background transition duration-300 ease-all",
    secondary: "bg-secondary/70 hover:bg-secondary text-text transition duration-300 ease-all",
    accent: "bg-accent text-text hover ",
    carousel: "bg-background/60 border border-text/10 backdrop-blur hover:bg-background/80",
  };
  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}