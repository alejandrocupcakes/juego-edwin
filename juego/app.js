const rock=1
const paper=2
const scissor=3

const userRock = document.getElementById('rock')
const userPaper = document.getElementById('rock')
const userScissor= document.getElementById('rock')

userRock.addEventListener('click',chooseRock)
userPaper.addEventListener('click',chooseRock)
userScissor.addEventListener('click',chooseRock)

function chooseRock(){
    document.getElementById('shift-user').textContent = 'usuario eligio piedra'
}