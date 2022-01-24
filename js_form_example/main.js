const ALERT = (title, message, type="warning") => `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
let alert = document.getElementById("alert")
let userList = document.getElementById("userList")
let myForm = document.getElementById("myForm")
myForm.addEventListener("submit", submitForm)

function submitForm(e){
    e.preventDefault()

    const USERNAME = document.getElementById("username")
    const SCORE = document.getElementById("score")

    if (USERNAME.value && SCORE.value){
        addToUI(USERNAME.value, SCORE.value)
        USERNAME.value = ""
        SCORE.value = ""
    } else {
        alert.innerHTML = ALERT("Title", "fill the blank fields...", "danger")
    }

}


function addToUI(username, score){
    let li = document.createElement("li")
    li.innerHTML = `
    ${username} 
    <span class="badge bg-primary rounded-pill">${score}</span>
    `
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
    userList.append(li)
}