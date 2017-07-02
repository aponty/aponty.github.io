const body = document.querySelector('body')
const arr = []

for (let i = 0; i < 7; i++) {
    arr.push(Math.floor(Math.random() * 6))
}

const y = document.createElement('div')
y.textContent = arr
y.setAttribute('data', arr)
body.appendChild(y)
console.log(arr)
