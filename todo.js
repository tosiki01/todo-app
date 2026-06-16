function handleAdd() {
    if (input.value.trim() === "") return;
    addTodo(input.value);
    input.value = "";
}

const input=
document.getElementById("to-input");


input.addEventListener("keydown" ,
function(key) {
    console.log(key.key);
    if (key.key === "Enter") {
        handleAdd();
    }
    if (key.key === "Delete") {
        input.value = "";
    }
});

const button=
document.getElementById("the-button");


    
button.addEventListener("click" ,
handleAdd);


const list=
document.getElementById("the-list");


function addTodo(text) {
    const li = document.createElement("li");
    li.textContent = text;
    const deleteBtn = 
    document.createElement("button");
    deleteBtn.textContent = "削除";
    deleteBtn.addEventListener("click" ,
        function() {
             li.remove();
             saveTodos();
            
});
    li.appendChild(deleteBtn);
    list.appendChild(li);
    saveTodos();
}


function saveTodos() {
  localStorage.setItem("todo" , list.innerHTML);
}

const savedTodo = 
localStorage.getItem("todo");

if(savedTodo) {
    list.innerHTML = savedTodo;
    list.querySelectorAll("button").forEach((btn) => {
        btn.addEventListener("click", function() {
            btn.parentElement.remove();
            saveTodos();
        });
    });
}


