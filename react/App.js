import TodoItem from './components/TodoItem.js'

class App {
  constructor() {
    const $app = document.querySelector('#app')
    new TodoItem($app)
  }
}
new App()
