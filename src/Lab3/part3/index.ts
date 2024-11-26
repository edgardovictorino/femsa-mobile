import { UserService } from './model';
import { LoginPresenter } from './presenter';
import { ConsoleLoginView } from './view';

const userService = new UserService();
const loginView = new ConsoleLoginView();

new LoginPresenter(userService, loginView).login("user", "pass");
