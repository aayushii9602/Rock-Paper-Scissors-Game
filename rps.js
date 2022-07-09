var me
var myscore = 0
var opponenet
var opponenetScore = 0

var choices = ['Rock', 'Paper', 'Scissors']

console.log('hello')
window.onload = () => {
  for (let i = 0; i < 3; i++) {
    let choice = document.createElement('img')
    choice.id = choices[i]
    choice.src = choices[i] + '.png'
    choice.addEventListener('click', selectChoice)
    document.getElementById('Choices').append(choice)
  }
}
function selectChoice() {
  me = this.id
  document.getElementById('Your-Choice').src = me + '.png'

  opponenet = choices[Math.floor(Math.random() * 3)]
  document.getElementById('Opponenet-Choice').src = opponenet + '.png'

  if (me == opponenet) {
    myscore += 0
    opponenetScore += 0
  } else {
    if (me == 'Rock') {
      if (opponenet == 'Scissors') {
        myscore += 1
      } else if (opponenet == 'Paper') {
        opponenetScore++
      }
    }
    if (me == 'Scissors') {
      if (opponenet == 'Paper') {
        myscore += 1
      } else if (opponenet == 'Rock') {
        opponenetScore++
      }
    }
    if (me == 'Paper') {
      if (opponenet == 'Scissors') {
        opponenetScore++
      } else if (opponenet == 'Rock') {
        myscore += 1
      }
    }
  }

  document.getElementById('Your-Score').innerText = 'Your Score- ' + myscore
  document.getElementById('Opponenet-Score').innerText =
    'Opponent score- ' + opponenetScore
}
