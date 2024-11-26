export class UserService {
  private users = new Map<string, string>([["user", "pass"]]);

  authenticate(username: string, password: string): boolean {
    return this.users.has(username) && this.users.get(username) === password;
  }
}
