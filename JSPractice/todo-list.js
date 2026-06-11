let toDoArray = [];
      let taskInput = document.querySelector('.todo-input1');
      let addButton = document.querySelector('.add-button');
      let resetButton = document.querySelector('.reset-button');
      let dateInput = document.querySelector('.date-input')

      function addTask() {
        let task = taskInput.value;
        let date = dateInput.value;
        if (task !== "" && date !== "") {
          toDoArray.push({name: task, dueDate: date});
        } else {
          alert("You must select a task and a due date!");
        }
  
        renderTask();
        
      }

      function resetList() {
        let toDoList = document.querySelector('.task-display');
        toDoList.innerHTML = ""
        toDoArray = [];
      }

      function renderTask() {
        let toDoList = document.querySelector('.task-display');
        toDoList.innerHTML = "";
        toDoArray.forEach((value, index) => {
          let html = `
          <div class = "todo-item">
            <span class = "text">${value.name}</span> 
            <span class = "date">${value.dueDate}</span>
            <button class = "delete-button" 
            onclick = "toDoArray.splice(${index}, 1); renderTask()"
            >Delete</button>
          </div>`;
          toDoList.innerHTML += html;
        });
      }

  

      addButton.addEventListener("click", addTask);
      resetButton.addEventListener("click", resetList);

      
      taskInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          addTask();
        }
      });