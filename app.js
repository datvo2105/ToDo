const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const todoJob = $(".todo-job");
const btnSubmit = $(".btn-submit");
const todoList = $(".todo-list");
const checkDone = $(".btn-check");

const app = {
  createNewId: () => document.querySelectorAll(".list-item").length + 1,
  deleteNode: function (e) {
    const $this = e.target;
    const id = $this.getAttribute("data-removeId");
    const listItem = document.querySelector(`[data-id="${id}"]`);
    $(".todo-list").removeChild(listItem);
  },
  handleAdd: function () {
    // Event add new job
    btnSubmit.onclick = () => {
      const addNew = todoJob.value;
      const id = this.createNewId();
      const listItem = document.createElement("div");
      listItem.className = "list-item";
      listItem.setAttribute("data-id", id);
      listItem.innerHTML = `
        <input type="checkbox" name="checkDone" />
            <label for="job" class="content-job">${addNew}</label>
            <div class="todo-btn">
              <div class="btn btn-change">
                <i class="fa-solid fa-eraser"></i>
              </div>
              <div class="btn btn-delete" data-removeId="${id}">
                <i class="fa-regular fa-trash-can" data-removeId="${id}"></i>
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
    const btnsDelete = document.querySelectorAll(".btn-delete");

    // const listItems = $$(".list-item");
    // btnsDelete.forEach((btnDelete, index) => {
    //   btnDelete.onclick = () => {
    //     const todoList = $(".todo-list");
    //     todoList.removeChild(todoList.children[index]);
    //   };
    // });

    btnsDelete.forEach((element) => {
      element.addEventListener("click", this.deleteNode);
    });
  },

  start: function () {
    this.handleDelete();
    this.handleAdd();
  },
};

app.start();

const a = () => 10;
const b = () => 10;
