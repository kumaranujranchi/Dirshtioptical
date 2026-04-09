import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = ({ variant = 'primary', size = 'md', children, className, ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none rounded-md";
  
  const variants = {
    primary: "bg-primary text-on-primary shadow-lg hover:shadow-primary/20",
    secondary: "bg-secondary text-on-secondary shadow-lg hover:shadow-secondary/20",
    tertiary: "bg-transparent text-primary hover:text-secondary",
    outline: "bg-transparent border border-outline-variant text-primary hover:bg-surface-container-low"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
