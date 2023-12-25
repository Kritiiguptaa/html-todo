const input=document.querySelector(".input");
const button=document.querySelector(".add-button");
const todoList=document.querySelector(".todo");

button.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteTodo)

function addTodo(event){
event.preventDefault();

// console.log(input.value);
const todoDiv= document.createElement("div");
todoDiv.classList.add("todo-container");

const todoItem = document.createElement("li");
todoItem.classList.add("todo-item");
todoItem.innerText = input.value;
todoDiv.appendChild(todoItem);

const deleteButton = document.createElement("button");
deleteButton.classList.add("delete-btn");
deleteButton.innerHTML='<i class="fa-solid fa-trash"></i>';
todoDiv.appendChild(deleteButton);

const CompleteButton= document.createElement("button");
CompleteButton.classList.add("complete-btn");
CompleteButton.innerHTML='<i class="fa-regular fa-thumbs-up"></i>';
todoDiv.appendChild(CompleteButton);

todoList.appendChild(todoDiv);      //saare todoDiv children ko under todoList(parent) ke under kr diya
input.value="";     //so that after every input the input bar clear itself for nxt input
}

function deleteTodo(event){
    // console.log(event.target);

    const item=event.target;
    // console.log(item);
    if(item.classList[0]==="delete-btn"){   // === : for both data type and value comparison
        const delItem=item.parentElement;
        // console.log(delItem);
        delItem.remove();
    }
    if(item.classList[0]==="complete-btn"){
        const delItem=item.parentElement;
        // console.log(delItem);
        delItem.classList.toggle("completed");
    }
}