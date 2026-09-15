import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {

  const styles = {
    primary:
      "bg-gold text-navy hover:opacity-90",
    
    secondary:
      "bg-brand-blue text-white hover:bg-mid-blue",
    
    outline:
"border border-white text-white hover:bg-white hover:text-navy",
  };


  const buttonClass = `
    inline-flex items-center justify-center
    rounded-md
    px-6 py-3
    text-sm font-semibold
    transition
    ${styles[variant]}
    ${className}
  `;


  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }


  return (
    <button className={buttonClass}>
      {children}
    </button>
  );
}