# Component Library

This library provides a set of reusable, type-safe React components built with TypeScript. Each component is designed for flexibility, robustness, and ease of integration into modern React applications.

## Table of Contents

1. [Overview](#overview)
2. [Components](#components)
    - [Button](#button)
    - [InputField](#inputfield)
    - [List](#list)
3. [TypeScript Techniques](#typescript-techniques)
4. [Installation](#installation)
5. [License](#license)

---

## Overview

This library includes the following components:
- **Button**: A generic button component with type-safe event handling and error handling.
- **InputField**: A type-safe input field supporting multiple data types and validations.
- **List**: A dynamic list component with support for filtering, rendering customization, and type safety.

Each component is designed with scalability and maintainability in mind, leveraging TypeScript features such as generics, union types, and utility types.

---

## Components

### Button

**Purpose**: A reusable button component that supports custom types for values, flexible event handling, and error management.

**Key Features**:
- Generic typing for the `value` property.
- Optional properties: `onClick` and `disabled`.
- Built-in error handling for invalid or missing values.

---

### InputField

**Purpose**: A type-safe input field component that handles both string and number inputs with validations and error handling.

**Key Features**:
- Generic support for `string` and `number` types.
- Validates input based on type and required status.
- Customizable `placeholder` and `type` properties.

---

### List

**Purpose**: A dynamic list component that renders items of any type with optional filtering and custom rendering.

**Key Features**:
- Generic typing for flexibility in list item types.
- Optional `filter` function to display a subset of items.
- Custom rendering through the `renderItem` property.

---

## TypeScript Techniques

Each component in this library leverages advanced TypeScript features for robustness and scalability:

- **Generics**: Used to ensure components can handle flexible types (`<T>`).
- **Union Types**: For defining custom error types and optional properties.
- **Utility Types**: `ReadonlyArray` ensures immutability in the `List` component.
- **Type Guards**: Used in `InputField` to validate and filter input values.
- **Static Typing**: Enforced across all properties and methods to catch errors at compile-time.

---

## Installation

Install the library by cloning this repository or copying the components into your project:

1. Clone the repository:
   ```bash
   git clone https://github.com/edgardovictorino/femsa-mobile.git
   ```
2. Navigate to the project folder:
   ```bash
   cd femsa-mobile
   ```

---

## License

This project is licensed under the MIT License.
