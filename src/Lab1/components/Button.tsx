import { useState } from "react";

// Custom error type for Button component
type ButtonError =
  | { type: "MISSING_VALUE"; message: string }
  | { type: "INVALID_CLICK_HANDLER"; message: string }
  | { type: "UNKNOWN_ERROR"; message: string };

interface ButtonProps<T> {
  /** 
   * The value or content of the button, which can be a string, number, or any type provided that is renderable. 
   */
  value: T;

  /** 
   * Function triggered on button click. Optional. 
   */
  onClick?: (value: T) => void;

  /** 
   * Determines if the button is disabled. Optional.
   */
  disabled?: boolean;
}

/**
 * Generic button component with error handling.
 */
const Button = <T extends unknown>({
  value,
  onClick,
  disabled = false,
}: ButtonProps<T>): JSX.Element => {
  const [error, setError] = useState<ButtonError | null>(null);

  // Helper function to validate props
  const validateProps = () => {
    if (value === null || value === undefined) {
      setError({ type: "MISSING_VALUE", message: "The 'value' prop is required." });
      return false;
    }

    if (onClick && typeof onClick !== "function") {
      setError({
        type: "INVALID_CLICK_HANDLER",
        message: "The 'onClick' prop must be a function.",
      });
      return false;
    }

    return true;
  };

  // Handles the button click and validates the button before execution
  const handleClick = () => {
    if (!disabled && onClick && validateProps()) {
      try {
        onClick(value);
      } catch (err) {
        setError({
          type: "UNKNOWN_ERROR",
          message: "An unknown error occurred during the click event.",
        });
      }
    }
  };

  // Error UI renderer
  const renderError = (error: ButtonError) => (
    <div className="button-error">
      <strong>Error: </strong>
      {error.message}
    </div>
  );

  if (error) return renderError(error);

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
    >
      {String(value)}
    </button>
  );
};

export default Button;
