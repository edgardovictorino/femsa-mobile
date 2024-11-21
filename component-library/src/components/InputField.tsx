import { useState, ChangeEvent } from "react";

// Custom error type for InputField
type InputFieldError =
  | { type: "INVALID_TYPE"; message: string }
  | { type: "EMPTY_VALUE"; message: string }
  | { type: "UNKNOWN_ERROR"; message: string };

// Props definition for the InputField component
interface InputFieldProps<T extends string | number> {
  /** 
   * The current value of the input field.
   */
  value: T;

  /** 
   * Callback function triggered on input change.
   */
  onChange: (value: T) => void;

  /** 
   * Placeholder text for the input field. Optional.
   */
  placeholder?: string;

  /** 
   * Determines if the input is required. Optional.
   */
  required?: boolean;

  /** 
   * Specifies the input type, such as "text" or "number". Defaults to "text".
   */
  type?: "text" | "number";
}

/**
 * InputField component supporting string and number types with type-safe error handling.
 */
const InputField = <T extends string | number>({
  value,
  onChange,
  placeholder = "",
  required = false,
  type = "text",
}: InputFieldProps<T>): JSX.Element => {
  const [error, setError] = useState<InputFieldError | null>(null);

  // Validate input value based on the input type
  const validateInput = (inputValue: string): boolean => {
    if (required && inputValue.trim() === "") {
      setError({ type: "EMPTY_VALUE", message: "This field is required." });
      return false;
    }

    if (type === "number" && isNaN(Number(inputValue))) {
      setError({ type: "INVALID_TYPE", message: "Please enter a valid number." });
      return false;
    }

    setError(null);
    return true;
  };

  // Handle input changes
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (validateInput(inputValue)) {
      // Ensure the correct type is passed to onChange
      onChange(type === "number" ? (Number(inputValue) as T) : (inputValue as T));
    }
  };

  // Render error message if exists
  const renderError = (error: InputFieldError) => (
    <div className="input-error">
      <strong>Error: </strong>
      {error.message}
    </div>
  );

  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="input"
      />
      {error && renderError(error)}
    </div>
  );
};

export default InputField;
