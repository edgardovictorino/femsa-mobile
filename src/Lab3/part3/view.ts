interface LoginView {
  showSuccess(): void;
  showError(): void;
}

class ConsoleLoginView implements LoginView {
  showSuccess(): void {
    console.log("Login was successful!");
  }

  showError(): void {
    console.log("Login failed. Please try again.");
  }
}

export { LoginView, ConsoleLoginView };
