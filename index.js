// Import stylesheets
import './style.css';

// Write Javascript code!
class CreateLIItems {
  constructor(name) {
    this.name = name;
    const listEl = document.createElement('li');
    listEl.textContent = name;
    const parentUL = document.querySelector('#names');
    parentUL.appendChild(listEl);
  }
}

class NameGenerator {
  constructor() {
    this.names = ['VHS', 'Virat', 'Tom Cruise'];
    this.currentNameIdx = 0;
    const btn = document.querySelector('#submit');
    console.log(this);
    btn.addEventListener('click', this.addName);
  }

  addName() {
    console.log(this); // Here 'this' refers to button element. Since addName() is called by buttonElement callback. And this always points out the references to the object which is called. In this case it is buttonElement. How do we tell to class that 'this' ref in addName() should refer to the NameGenerator object rather than button element ???
    const name = this.names[this.currentNameIdx];
    new CreateLIItems(name);
    this.currentNameIdx++;
  }
}

new NameGenerator();
