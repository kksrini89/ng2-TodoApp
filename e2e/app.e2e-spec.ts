<<<<<<< HEAD
import { TodoPage } from './app.po';

describe('todo App', function() {
  let page: TodoPage;

  beforeEach(() => {
    page = new TodoPage();
=======
import { TodoAppPage } from './app.po';

describe('todo-app App', function() {
  let page: TodoAppPage;

  beforeEach(() => {
    page = new TodoAppPage();
>>>>>>> 8105d6f28cda0603993aa21e501a97a7f7fe58e5
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
