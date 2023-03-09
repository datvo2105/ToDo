const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const todoJob = $(".todo-job");
const btnSubmit = $(".btn-submit");
const todoList = $(".todo-list");
const checkDone = $(".btn-check");

const app = {
  handleAdd: function () {
    // Event add new job
    btnSubmit.onclick = () => {
      const addNew = todoJob.value;
      const listItem = document.createElement("div");
      listItem.innerHTML = `
      <div class="list-item">
        <input type="checkbox" name="checkDone" id="checkDone" />
            <label for="job" class="content-job">${addNew}</label>
            <div class="todo-btn">
              <div class="btn btn-change">
                <i class="fa-solid fa-eraser"></i>
              </div>
              <div class="btn btn-delete">
                <i class="fa-regular fa-trash-can"></i>
              </div>
            </div> 
        </div>
      `;
      todoList.appendChild(listItem);
      todoJob.value = "";
      this.handleDelete();
    };
  },

  handleDelete: function () {
    // Event delete job
    const btnsDelete = $$(".btn-delete");
    const listItems = $$(".list-item");
    btnsDelete.forEach((btnDelete, index) => {
      btnDelete.onclick = () => {
        const todoList = $(".todo-list");
        todoList.removeChild(todoList.children[index]);
      };
    });
  },

  start: function () {
    this.handleDelete();
    this.handleAdd();
  },
};

app.start();
