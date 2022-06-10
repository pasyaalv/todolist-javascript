const submitButton = document.getElementById('submit')
submitButton.addEventListener('click', function () {
  const formValue = document.getElementById('form').value
  console.log(formValue)

  if (formValue == "") {
    alert("Kolom pengisian tidak boleh kosong !")
    return false;
  }

  addTask()

  function addTask() {

    localStorage.setItem("taskTodo", formValue)
    const ListForm = document.getElementById('listForm')
    const div = document.createElement('div')

    div.innerHTML = `<input type="checkbox" class="check mx-2 my-2 ">
        <input type="text" value="${formValue}" class="text-slate-700 mr-6 text-base my-4" id="todoInput">
        <img src="./img/trash.png" id="deleteButton" class="h-10 float-right mr-48" onclick="removeTask()">
        `
    ListForm.insertBefore(div, ListForm.children[0])

  }
})

function removeTask() {
  const deleteButton = document.getElementById('deleteButton')
  deleteButton.addEventListener('click', function () {
    this.parentElement.remove()
    let removedItem = this.parentElement.firstElementChild.innerText

    const newArr = storedItems.filter(item => item !== removedItem)
    storedItems = newArr
    localStorage.setItem('tasks', JSON.stringify(storedItems))
    window.localStorage.removeItem('tasks')

    for (let i = list.childNodes.length - 1; i >= 0; i--) {
      list.childNodes[i].remove()
    }
  }
  )
}

// Save new task menggunakan array
// var arrayTodo = []
// const ListForm = document.getElementById('list')

// const submitButton = document.getElementById('submit')
// submitButton.addEventListener('click', function(){
//     const formValue = document.getElementById('form').value
//     console.log(formValue)
//     ListForm.innerHTML = arrayTodo.map(function(item1){
//         return `<div>
//         <input type="checkbox" class="p-2 mx-2 my-2">
//         <label for="checkbox">${item1}</label>
//     </div>`
//     })
// })