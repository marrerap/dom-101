const header = document.getElementById("heading")
header.textContent = "Toppings"

const burger = document.getElementById("burger")
burger.setAttribute('class', 'list-item')

const pickles = document.createElement("li")
const list = document.getElementById("list")
list.appendChild(pickles)
pickles.innerText = "Pickles"
pickles.setAttribute('id', 'pickles')
pickles.classList.add('list-item')
