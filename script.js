"use strict";

class Worker {
  constructor(name, age = 0, skills = [], kids = false) {
    this.name = name;
    this.age = age;
    this._skills = skills;
    this.kids = kids;
  }

  get skills() {
    return this._skills;
  }

  set skills(str) {
    this.skills.push(str);
  }

  sayHello() {
    return `Привет, меня зовут ${this.name}, мне ${this.age} лет ${this.skills}`;
  }
}

class Mechanic extends Worker {
  constructor(name, age, skills, kids, major) {
    super(name, age, skills, kids);
    this._major = major;
  }

  get major() {
    return this._major;
  }

  set major(str) {
    this._major = str;
  }

  introduce() {
    return `Моя специальность: ${this.major}\nМои навыки: ${this.skills}`;
  }

  haveKids() {
    if (this.kids) {
      return "У меня есть дети";
    } else {
      return "У меня нет детей";
    }
  }
}

class Driver extends Worker {
  constructor(name, age, skills, kids, major) {
    super(name, age, skills, kids);
    this._major = major;
  }
  get major() {
    return this._major;
  }

  set major(str) {
    this.major = str;
  }

  introduce() {
    return `Моя специальность: ${this.major}\nМои навыки: ${this.skills}`;
  }

  haveKids() {
    if (this.kids) {
      return "У меня есть дети";
    } else {
      return "У меня нет детей";
    }
  }
}

const saveBtn = document.querySelector(".save");
let className = "";
const toDoData = JSON.parse(localStorage.getItem(className)) || [];

const render = function () {
  const tableWorker = document.querySelector(".tableWorker");
  const tableName = document.querySelector(".tableName");
  const tableAge = document.querySelector(".tableAge");
  const tableSkills = document.querySelector(".tableSkills");
  const tableMajor = document.querySelector(".tableMajor");
  const tableKids = document.querySelector(".tableKids");
  // tableName.textContent = "";
  // tableAge.textContent = "";
  // tableSkills.textContent = "";
  // tableMajor.textContent = "";
  // tableKids.textContent = "";
  // tableWorker.textContent = "";
  toDoData.forEach(function (item) {
    tableWorker.textContent = className
    tableName.textContent = 'Name: ' + item.name
    tableAge.textContent = 'Age: ' + item.age
    tableSkills.textContent = 'Skills: ' + item.skills
    tableMajor.textContent = 'Major: ' + item.major
    tableKids.textContent = 'Kids: ' + item.kids
    localStorage.setItem(className, JSON.stringify(toDoData));
  });
};

saveBtn.addEventListener("click", function () {

  const inputsText = document.querySelectorAll("form input[type=text]");
  let isError = false;

  inputsText.forEach((item) => {
    if (item.value === "") {
      item.style.backgroundColor = "yellow";
      isError = true;
    } else {
      item.style.backgroundColor = "white";
    }
  });

  if (!isError) {
    const inputName = document.querySelector(".name");
    const inputAge = document.querySelector(".age");
    const inputSkills = document.querySelector(".skills");
    const inputMajor = document.querySelector(".major");
    const inputKids = document.querySelector("input[type=checkbox]");
    const nameClass = document.querySelector("select");

    if (nameClass.value === "mechanic") {
      const mechanic = new Mechanic(
        inputName.value,
        +inputAge.value,
        inputSkills.value,
        inputKids.checked,
        inputMajor.value
      );
      className = "Mechanic";
      toDoData.push(mechanic);
      inputName.value = "";
      inputAge.value = "";
      inputSkills.value = "";
      inputKids.checked = false;
      inputMajor.value = "";
      
      render();
    } else if (nameClass.value === "driver") {
      const driver = new Driver(
        inputName.value,
        +inputAge.value,
        inputSkills.value,
        inputKids.checked,
        inputMajor.value
      );
      className = "Driver";
      toDoData.push(driver);
      inputName.value = "";
      inputAge.value = "";
      inputSkills.value = "";
      inputKids.checked = false;
      inputMajor.value = "";
      
      render();
    }
  }
});

render();
