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
const appData = {
  obj: [],
  init: function () {
    saveBtn.addEventListener("click", function () {
      const inputsText = document.querySelectorAll("form input[type=text]");
      this.isError = false;

      inputsText.forEach((item) => {
        if (item.value === "") {
          item.style.backgroundColor = "yellow";
          this.isError = true;
        } else {
          item.style.backgroundColor = "white";
        }
      });

      if (!this.isError) {
        const tableWorker = document.querySelector(".tableWorker");
        const tableName = document.querySelector(".tableName");
        const tableAge = document.querySelector(".tableAge");
        const tableSkills = document.querySelector(".tableSkills");
        const tableMajor = document.querySelector(".tableMajor");
        const tableKids = document.querySelector(".tableKids");
        const inputName = document.querySelector(".name");
        const inputAge = document.querySelector(".age");
        const inputSkills = document.querySelector(".skills");
        const inputMajor = document.querySelector(".major");
        const inputKids = document.querySelector("input[type=checkbox]");
        const nameClass = document.querySelector("select");

        tableName.textContent = "Name: " + inputName.value;
        tableAge.textContent = "Age: " + inputAge.value;
        tableSkills.textContent = "Skills: " + inputSkills.value;
        tableMajor.textContent = "Major: " + inputMajor.value;
        tableKids.textContent = "Kids: " + inputKids.checked;
        tableWorker.textContent = "Работник: " + nameClass.value;

        if (nameClass.value === "mechanic") {
          const mechanic = new Mechanic(
            inputName.value,
            +inputAge.value,
            inputSkills.value,
            inputKids.checked,
            inputMajor.value
          );
          appData.obj.push(mechanic);
          console.log(appData.obj);
        } else if (nameClass.value === "driver") {
          const driver = new Driver(
            inputName.value,
            +inputAge.value,
            inputSkills.value,
            inputKids.checked,
            inputMajor.value
          );
          appData.obj.push(driver);
          console.log(appData.obj);
        }
      }
    });
  },
};

appData.init();
