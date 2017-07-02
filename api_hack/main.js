const body = document.querySelector('body')
const arr = []

for (let i = 0; i < 7; i++) {
    arr.push(Math.floor(Math.random() * 6))
}

const y = document.createTextNode(arr)

body.appendChild(y)
console.log(arr)
