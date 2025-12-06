export default function Button({
  children,
  variant = "base",
  className = "",
  ...props
}) {
  const base = "px-2 py-1.5 rounded-md font-bold font-body text-text backdrop-blur-sm hover:bg-secondary/40";
  
  const variants = {
      primary: "bg-primary text-background ",
      secondary: "bg-secondary/40 text-text ",
      accent: "bg-accent text-text hover ",
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
