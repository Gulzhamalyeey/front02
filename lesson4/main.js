const blocks = document.getElementsByClassName('block');
//console.log(blocks)

const block3 = document.getElementById('block3');
//block3.className = "changedClass"
//block3.classList.add("sadsa")
//block3.classList.remove("this")
//console.log(block3)

block3.onclick = () => {
    block3.classList.toggle("active")
}

const block = document.querySelectorAll('.block')

//console.log(block)

const button = document.getElementById('button');
const input = document.getElementById('input')
