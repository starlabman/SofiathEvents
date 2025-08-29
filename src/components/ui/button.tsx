import React from 'react';
import { cn } from '@/lib/utils';
import { useAnalytics } from '@/hooks/useAnalytics';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  trackingLabel?: string;
  trackingCategory?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, href, onClick, trackingLabel, trackingCategory = 'CTA', ...props }, ref) => {
    const { trackCTA } = useAnalytics();

    const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary shadow-lg hover:shadow-glow transform hover:-translate-y-0.5",
      secondary: "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary shadow-lg hover:shadow-glow-coral transform hover:-translate-y-0.5",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
      ghost: "text-primary hover:bg-primary/10 focus:ring-primary"
    };

    const sizes = {
      sm: "px-4 py-2 text-sm rounded-md",
      md: "px-6 py-3 text-base rounded-lg",
      lg: "px-8 py-4 text-lg rounded-xl"
    };

    const classes = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      className
    );

    const handleClick = () => {
      // Track CTA click
      if (trackingLabel) {
        trackCTA(trackingLabel, trackingCategory);
      }

      if (href) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      if (onClick) {
        onClick();
      }
    };

    return (
      <button
        ref={ref}
        className={classes}
        onClick={handleClick}
        type="button"
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
