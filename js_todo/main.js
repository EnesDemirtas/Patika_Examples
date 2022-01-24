let inputField = document.getElementById("task")
let addButton = document.getElementById("liveToastBtn")
let todoList = document.getElementById("list")

addButton.addEventListener("click", addTodoToUI)

function addTodoToUI() {
    let data = inputField.value
    if (data.replace(" ", "") === "") {
        // HATA
    } else {
        let newItem = document.createElement("li")
        newItem.setAttribute("id", `item-${getNumberOfTodos()}`)
        newItem.innerHTML = `${inputField.value} <i class="fas fa-trash trash" id="trash-${getNumberOfTodos()}"style="position: absolute; right: 1em; padding: 0.5em;"></i>`
        todoList.append(newItem)
        addTodoToStorage(inputField.value)
        inputField.value = ""
        document.getElementById(`trash-${getNumberOfTodos()}`).addEventListener("click", deleteTodoFromUI)
    }
}

function addTodoToStorage(value) {
    let current_todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
    current_todos.push(value)
    localStorage.setItem("todos", JSON.stringify(current_todos))
    trashEventListeners()
}

window.addEventListener("load", loadTodosFromStorage)

function loadTodosFromStorage() {
    let current_todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
    for (var i = 0; i < current_todos.length; i++) {
        let item = document.createElement("li")
        item.setAttribute("id", `item-${i}`)
        item.innerHTML = `${current_todos[i]} <i class="fas fa-trash trash" id="trash-${i}" style="position: absolute; right: 1em; padding: 0.5em;"></i>`
        todoList.append(item)
    }

    trashEventListeners()
}

function trashEventListeners(){
    let temp_trashs = document.getElementsByClassName("trash")
    var trashs = [].slice.call(temp_trashs);
    trashs.forEach(function(element) {element.addEventListener("click", deleteTodoFromUI)})
}

function deleteTodoFromUI(e) {
    e.preventDefault()
    let item_number = e.target.id.slice(6)
    document.getElementById(e.target.id).parentElement.remove()
    deleteTodoFromStorage(item_number)
}

function deleteTodoFromStorage(itemNumber){
    let current_todos = JSON.parse(localStorage.getItem("todos"))
    current_todos.splice(itemNumber-1, 1)
    localStorage.setItem("todos", JSON.stringify(current_todos))
}

function getNumberOfTodos() {
    return localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : 0
}

