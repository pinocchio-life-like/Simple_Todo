adder = document.querySelector('.add')
container = document.querySelector('.container')
textArea = document.querySelector('#todo')

document.querySelector('#todo').addEventListener('keyup', (e) => {
  const usernamePattern = /^[a-zA-Z]{10,}/
  if(usernamePattern.test(e.target.value)){
    textArea.setAttribute('style', "border-color: limegreen")
  }
})

adder.addEventListener('click', () => {
  const todoField = document.querySelector('.input-wrapper')
  todoField.setAttribute('style', 'display: block')

  document.querySelector('.input-close').addEventListener('click', () => {
    todoField.setAttribute('style', 'display: none')
  })

  const todoForm = document.querySelector('.todo-form')
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    // const todoText = document.querySelector('#todo');
    // console.log(todoText.value)
    // console.log(todoForm.todo.value)

    if(todoForm.todo.value){
      const li = document.createElement('li')
      li.textContent = `${todoForm.todo.value}`
      container.append(li)
      const button = document.createElement('button')
      Object.assign(button, {
        textContent: "delete",
        className: 'delete',
        style: 'display: block; margin-left: auto'
        })
      li.append(button)
      todoField.setAttribute('style', 'display: none')
      todoForm.todo.value = ""
      }
    })
  })

container.addEventListener('click', (e) => {
  if(e.target.className === "delete"){
    popup = document.querySelector('.popup-wrapper')
    popup.setAttribute(
      'style', 'display: block'
    )
    document.querySelector('.popup-close').addEventListener('click', () => {
      popup.setAttribute('style', 'display: none')
    })
    // popup.addEventListener('click', () => {
    //   popup.setAttribute('style', 'display: none')
    // })
    const check = document.querySelector('.checker')
    check.addEventListener('click', () => {
      e.target.parentElement.remove()
      popup.setAttribute('style', 'display: none')
    })
  }
})




// The below deletes every element inside the parent that
// has an event listener
// container.addEventListener('click', (e) => {
//   e.target.remove()
//   // e.target.remove()
// })

// const todoAdder = () => {
  // const li = document.createElement('li')
  // li.textContent = 'learn React'
  // li.append(Object.assign(document.createElement('button'), {
  //   textContent: "delete",
  //   className: 'delete',
  //   style: 'display: block; margin-left: auto'
  // }))

  // const button = document.createElement('button')
  // Object.assign(button, {
  //   textContent: "delete",
  //   className: 'delete',
  //   style: 'display: block; margin-left: auto'
  // })
  // li.append(button)
  
  // container.append(li)

  // container.innerHTML += 
  //   `<li>learn REACT
  //       <button class="delete" style="display: block; margin-left: auto">
  //           delete
  //       </button>
  //   </li>`

  // container.addEventListener('click', (e) => {
  //   console.log(e.target)
  //   // e.target.remove()
  // })

    // deleter = document.querySelectorAll('.delete')

    // deleter.forEach((del, i) => {
    //   lists = document.querySelectorAll('li')
    //   del.addEventListener('click', () => {
    //     // lists[i].remove()
    //     lists[i].style.textDecoration = 'line-through'
    //   })
    // })

// }