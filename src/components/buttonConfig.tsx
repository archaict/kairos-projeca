import { Button as ShadcnButton } from "@/components/ui/button";
import clsx from "clsx";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  className?: string;
  [key: string]: any; // Allow other props to pass through
}

// Define a Button component with configurations
export const Button: React.FC<ButtonProps> = ({
  variant = "primary", // Default variant
  size = "md",        // Default size
  className,
  ...props
}) => {
  // Define styles for different button variants
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    tertiary: "bg-transparent text-gray-500 hover:text-gray-700 border border-gray-300",
  };

  // Define styles for different button sizes
  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <ShadcnButton
      className={clsx(
        "rounded-md font-semibold transition-colors duration-150",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );
};

// Usage examples
// import { Button } from './buttonConfig'

// <Button variant="primary" size="md">Primary Button</Button>
// <Button variant="secondary" size="lg">Secondary Button</Button>
// <Button variant="tertiary" size="sm">Tertiary Button</Button>
