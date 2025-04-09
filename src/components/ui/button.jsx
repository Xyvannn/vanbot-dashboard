export function Button({ children, className = "", variant = "default", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-white text-black hover:bg-gray-200",
    ghost: "bg-transparent hover:bg-white/10 text-white",
    secondary: "bg-pink-500 hover:bg-pink-600 text-white",
    outline: "border border-white text-white hover:bg-white/10",
  };

  return (
    <button className={`${base} ${variants[variant] || variants.default} ${className}`} {...props}>
      {children}
    </button>
  );
}
