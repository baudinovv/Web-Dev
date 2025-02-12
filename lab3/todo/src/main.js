import './style.css'

let addBtn = document.querySelector("#taskAdd");
let addInput = document.querySelector("#taskInput");
let addBox = document.querySelector("#taskBox");

addInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addBtn.click();
  }
});

function addTask(){
  let content = addInput.value;
  let task = document.createElement('div');
  task.className = "main__box-item";
  task.innerHTML = `
    <div class="main__box-item__content">
      <input type="checkbox" name="" id="">
      <div class="main__box-item__title">${content}</div>
    </div>
    <button class="main__box-item__btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18 9l-.84 8.398c-.127 1.273-.19 1.909-.48 2.39a2.5 2.5 0 0 1-1.075.973C15.098 21 14.46 21 13.18 21h-2.36c-1.279 0-1.918 0-2.425-.24a2.5 2.5 0 0 1-1.076-.973c-.288-.48-.352-1.116-.48-2.389L6 9m7.5 6.5v-5m-3 5v-5m-6-4h4.615m0 0l.386-2.672c.112-.486.516-.828.98-.828h3.038c.464 0 .867.342.98.828l.386 2.672m-5.77 0h5.77m0 0H19.5"/></svg>
    </button>
  `;
  let removeBtn = task.querySelector('button');
  removeBtn.addEventListener("click", () => {
    task.remove();
  });
  let addCheckbox = task.querySelector('input');
  let addTitle = task.querySelector('.main__box-item__title');

  task.addEventListener("click", () => {
    addCheckbox.click();
    if(addCheckbox.checked){
      addTitle.classList.add('done');
    } else{
      addTitle.className = "main__box-item__title";
    }
  });
  addBox.append(task);
}

addBtn.addEventListener("click", () => {
  addTask();
});