
// Constants
const addToDo = document.querySelector("#addToDo");
const newTaskInput = document.querySelector("#wrapper input");
const tasksContainer = document.querySelector("#tasks");
const error = document.getElementById ("error");
const countValue = document.querySelector (".count-value")
const displayCount = (taskCount) {
  countValue.innerText = taskCount;
};

//Variables

let taskCount = 0;

// Functions

const addTask = () {
  const taskName = newTaskInput.ariaValueMax.trim();
  error.style.display = "none";
  if (!taskName) {
    setTimeout(() {
      error.style.display = "block";
    }, 200);
    return;
  }
}

const task = <div class="task">
  <input type="checkbox" class="task-check"></input>
  <span class="taskname">${taskName}</span>
  <button class="edit">
  <i class="fa-solid fa-file-pen"></i>
  </button>
  <button class="delete">
  <i class="fa-solid fa-folder-minus"></i>
  </button>
</div>