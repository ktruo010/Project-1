const toGame = () => {
  document.body.innerHTML = `
    <div id="game-header"></div>
    <div id="score-board"></div>
    <div id="game-answer"></div>
    <div id="user-prompt"></div>
    <div id="game-question"></div>
    <div id="game-choices"></div>
    <div id="final-score"></div>
    <button id="next-question">Next</button>
    <button id="main-menu-game" onclick = "endGamePrompt()">End Game</button>
    <script type="text/javascript" src="http://tracking.musixmatch.com/t1.0/AMa6hJCIEzn1v8RuOP"></script>
    `
  if (kanyeTrump === true) {
    document.querySelector('#game-header').innerHTML = `<h1>Kanye vs Trump</h1>`
    document.querySelector('#user-prompt').innerHTML = `<h3>Guess who said this?</h3>`
  }
  else if (musicGame === true) {
    document.querySelector('#game-header').innerHTML = `<h1>Music Game</h1>`
    document.querySelector('#user-prompt').innerHTML = `<h3>Listen to the song and guess the song name and artist</h3>`

  }
  else if (lyricGame === true) {
    document.querySelector('#game-header').innerHTML = `<h1>Lyric Game</h1>`
    document.querySelector('#user-prompt').innerHTML = `<h3>Read the lyrics and guess the song name and artist</h3>`
  }
  else if (urbanDict === true) {
    document.querySelector('#game-header').innerHTML = `<h1>Urban Dictionary Game</h1>`
    document.querySelector('#user-prompt').innerHTML = `<h3>Match the word to definition</h3>`
  }
  else if (movietrivia === true) {
    document.querySelector('#game-header').innerHTML = `<h1>Rotten Tomatoes Game</h1>`
    document.querySelector('#user-prompt').innerHTML = `<h3>Guess the movie rating</h3>`
  }
  else if (genTrivia ===  true) {
    document.querySelector('#game-header').innerHTML = `<h1>General Trivia</h1>`
  }
}
// Game Frame Start
// let playerCount, body, playerOne, playerTwo, playerThree, playerFour, playerFive, playerSix, playerSeven, playerEight
let playerCount
let players = []

// Game Codes
let genTrivia = false
let urbanDict = false
let movietrivia = false
let lyricGame = false
let musicGame = false
let kanyeTrump = false
let options

// Initiate the application to ask how many players
const init = () => {
  let body = document.body
  body.innerHTML = `
    <div id = "introTitle">How many players are there?</div>
    <button class = "playerSelection">1</button>
    <button class = "playerSelection">2</button>
    <button class = "playerSelection">3</button>
    <button class = "playerSelection">4</button>
    <button class = "playerSelection">5</button>
    <button class = "playerSelection">6</button>
    <button class = "playerSelection">7</button>
    <button class = "playerSelection">8</button>
    `
}
document.addEventListener('click', event => {
  if (event.target.id === 'restart-game') {
    for (let i = 0; i < playerCount; i++) {
      players[i].playersPoints = 0
      document.querySelector('#' + players[i].playersName + 'Points').innerHTML = players[i].playersName + ` ` + ` Points: ` + players[i].playersPoints
    }
    if (genTrivia === true) {
      toGame()
      startGenTrivia()
      assignPlayersGenTrivia()
    } if (urbanDict === true) {
      toGame()
      initUrbanGame()
      assignPlayers()
    } if (lyricGame === true) {
      toGame()
      startLyricGame()
      assignPlayersLyric()
    } if (movietrivia === true) {
      toGame()
      startMovieGame()
      assignPlayersMovie()
      renderChoicesMovie()
    } if (musicGame === true) {
      toGame()
      getSong()
      assignPlayersMusic()
    } if (kanyeTrump === true) {
      toGame()
      getQuote()
      assignPlayersKT()
      renderChoicesKT()
    }
  }
})
// After the init, this is where we input the player's names
const playerNames = () => {
  let newHeader = document.createElement('div')
  newHeader.className = 'player-name-header'
  newHeader.innerHTML = `What are the players' names?`
  document.body.append(newHeader)
  for (let i = 0; i < playerCount; i++) {
    let newDiv = document.createElement('div')
    newDiv.setAttribute('id', 'player-label')
    newDiv.innerHTML = 'Player ' + (i + 1) + ' name: <input type = "text" id = "' + (i + 1) + '">'
    document.body.appendChild(newDiv)
  }
  let addButton = document.createElement('button')
  addButton.textContent = 'Submit'
  addButton.setAttribute('id', 'playerSubmit')
  document.body.appendChild(addButton)
}
// After the names are inserted, this will take us to the game

document.addEventListener('click', event => {
  if (event.target.className === 'playerSelection') {
    playerCount = parseInt(event.target.textContent)
    document.body.innerHTML = ''
    playerNames()
  } else if (event.target.id === 'playerSubmit' && genTrivia === true) {
    for (let i = 1; i <= playerCount; i++) {
      // players.push(document.getElementById(i).value)
      players.push({
        playersName: document.getElementById(i).value,
        playersPoints: 0
      })
    }
    toGame()
    startGenTrivia()
    assignPlayersGenTrivia()
  } else if (event.target.id === 'playerSubmit' && urbanDict === true) {
    for (let i = 1; i <= playerCount; i++) {
      // players.push(document.getElementById(i).value)
      players.push({
        playersName: document.getElementById(i).value,
        playersPoints: 0
      })
    }
    toGame()
    initUrbanGame()
    assignPlayers()
  } else if (event.target.id === 'playerSubmit' && movietrivia === true) {
    for (let i = 1; i <= playerCount; i++) {
      // players.push(document.getElementById(i).value)
      players.push({
        playersName: document.getElementById(i).value,
        playersPoints: 0
      })
    }
    toGame()
    startMovieGame()
    assignPlayersMovie()
    renderChoicesMovie()
  } else if (event.target.id === 'playerSubmit' && lyricGame === true) {
    for (let i = 1; i <= playerCount; i++) {
      // players.push(document.getElementById(i).value)
      players.push({
        playersName: document.getElementById(i).value,
        playersPoints: 0
      })
    }
    toGame()
    startLyricGame()
    assignPlayersLyric()
  } else if (event.target.id === 'playerSubmit' && musicGame === true) {
    for (let i = 1; i <= playerCount; i++) {
      // players.push(document.getElementById(i).value)
      players.push({
        playersName: document.getElementById(i).value,
        playersPoints: 0
      })
    }
    toGame()
    getSong()
    assignPlayersMusic()
    // renderChoicesMusic()
  } else if (event.target.id === 'playerSubmit' && kanyeTrump === true) {
    for (let i = 1; i <= playerCount; i++) {
      // players.push(document.getElementById(i).value)
      players.push({
        playersName: document.getElementById(i).value,
        playersPoints: 0
      })
    }
    toGame()
    getQuote()
    assignPlayersKT()
    renderChoicesKT()
  }
})

document.addEventListener('click', event => {
  if (event.target.className === 'kanyetrump' || event.target.className === 'boxes-align kanyetrump' || event.target.className === 'small-box kanyetrump') {
    init()
    kanyeTrump = true
    options = 2
  } if (event.target.className === 'musictrivia' || event.target.className === 'boxes-align musictrivia' || event.target.className === 'small-box musictrivia') {
    init()
    musicGame = true
    options = 4
  } if (event.target.className === 'lyricstrivia' || event.target.className === 'boxes-align lyricstrivia' || event.target.className === 'small-box lyricstrivia') {
    init()
    lyricGame = true
    options = 4
  } if (event.target.className === 'udtrivia' || event.target.className === 'boxes-align udtrivia' || event.target.className === 'small-box udtrivia') {
    init()
    urbanDict = true
    options = 4
  } if (event.target.className === 'movietrivia' || event.target.className === 'boxes-align movietrivia' || event.target.className === 'small-box movietrivia') {
    init()
    movietrivia = true
    options = 4
  } if (event.target.className === 'gentrivia' || event.target.className === 'boxes-align gentrivia' || event.target.className === 'small-box gentrivia') {
    init()
    genTrivia = true
    options = 4
  }
})
// -----------------------------------------------------Urban Dictionary Game-------------------------------------------------------
let rightWord
let wrongWords
let definition
let answerOptions = []
let words = ['A crapella', 'Ann Curry-ed', 'Askhole', 'Awesome sauce', 'Baby bump', 'Badassery', 'Beer me', 'Bitchy resting face', 'Bitcoin', 'Blamestorming', 'Boomerang child', 'Bromance', 'Bropocalypse', 'Bye Felicia', 'C-note', 'Cock block', 'Cougar', 'Crackberry', 'Crunk', 'Cyberslacking', 'Designated drunk', 'Duck face', 'Dude', 'Dweet', 'Earjacking', 'Earmuffs', 'Ego surfing', 'Extra', 'Fanboi/fangirl', 'Fauxpology', 'Finesse', 'Frak', 'Frankenfood', 'Friend zone', 'Froyo', 'Gaydar', 'Girl crush', 'Grrrl', 'Hangry', 'Helicopter parent', 'Hipster', 'Hot mess', 'Humblebrag', 'Hundo', 'Jailbait', 'Karaoke filibuster', 'Kicks', 'Knosh', 'Legendary', 'Lit', 'LOL', 'Ludwigvanquixote', 'Make it rain', 'Man boobs', 'Man cave', 'Meat sweats', 'MILF', 'Nasty woman', 'Netflix and chill', 'Ninja sex', 'Nom', 'Nontroversy', 'OM(F)G!', 'On a boat', 'One-upper', 'Party foul', 'Phat', 'Please advise', 'Pregret', 'Pwned', 'Quantum physics', 'Ratchet', 'Rendezbooze', 'Rickroll', 'Said no one ever', 'Salmon', 'Salty', 'Savage', 'Selfie', 'Sext', 'Shook', 'Side boob', 'Skrill', 'Snail mail', 'Sniff test', 'Swag', 'Sweet', 'That’s what she said', 'Trout', 'Twerk', 'Turnt', 'Typeractive', 'Upskirt', 'Virgin ears', 'W00t!', 'Woke', 'Word out', 'WTF', 'X-factor', 'YOLO', 'Zombie ad']

// Shuffle Machine
const shuffle = (a) => {
  let j, x, i
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = a[i]
    a[i] = a[j]
    a[j] = x
  }
  return a
}
// Creates the player's points board based on number of players
const assignPlayers = _ => {
  for (let i = 0; i < playerCount; i++) {
    let newDiv = document.createElement('div')
    newDiv.innerHTML = players[i].playersName + ` ` + ` Points: `
    newDiv.setAttribute('id', players[i].playersName + 'Points')
    newDiv.setAttribute('class', 'player-points')
    players[i].playersPoints = 0
    // newDiv.setAttribute('class', 'playersPoints')
    document.querySelector('#game-header').appendChild(newDiv)
  }
}

// Fetched random word for each level to keep the game's words fresh
const fetchWords = () => {
  fetch(`https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=16e7a83405cbb14ebf4080b08520c41458ac7f8f71cca9a10`)
    .then(response => response.json())
    .then(response => {
      words.push(response.word)
      fetchQuote()
    }
    )
}
// Grabbing the definition
const fetchQuote = () => {
  let wordShuffler = shuffle(words)
  fetch(`http://api.urbandictionary.com/v0/define?term=` + wordShuffler[0])
    .then(response => response.json())
    .then(response => {
      rightWord = response.list[0].word
      definition = response.list[0].definition
      answerOptions.push(response.list[0].word)
      document.querySelector('#game-question').innerHTML = `${definition}`
      grabWordChoices()
    }
    )
}
// Grabs wrong words and adds to answerOptions array
const grabWordChoices = () => {
  let wordShuffler = shuffle(words)
  for (let i = 0; i < 3; i++) {
    wrongWords = wordShuffler[i]
    answerOptions.push(wrongWords)
  }
  shuffle(answerOptions)
  renderChoices()
}
// Creates the users and their options each
const renderChoices = _ => {
  for (let i = 0; i < playerCount; i++) {
    let createPlayerDiv = document.createElement('div')
    createPlayerDiv.setAttribute('class', 'playerButtonNames')
    createPlayerDiv.innerHTML = `${players[i].playersName}`
    document.querySelector('#game-choices').append(createPlayerDiv)
    // Creating the options for each player
    for (let j = 0; j < 4; j++) {
      let createOptionButtons = document.createElement('button')
      createOptionButtons.setAttribute('class', 'choiceButton' + players[i].playersName)
      createOptionButtons.innerHTML = `${answerOptions[j]}`
      createOptionButtons.setAttribute('onclick', 'checkAnswer()')
      createOptionButtons.setAttribute('data-points', i)
      document.querySelector('#game-choices').append(createOptionButtons)
    }
  }
}

// Initiating the Game
const initUrbanGame = () => {
  document.querySelector('#game-choices').innerHTML = ''
  rightWord = ''
  wrongWords = ''
  definition = ''
  answerOptions = []
  // assignPlayers()
  fetchWords()
}

// Ending Game Prompt
const endGamePrompt = () => {
  for (let i = 0; i < playerCount; i++) {
    let newDiv = document.createElement('div')
    document.querySelector('#game-choices').innerHTML = ''
    document.querySelector('#game-question').remove()
    document.querySelector('#game-choices').innerHTML = ''
    document.querySelector('#next-question').remove()
    document.querySelector('#main-menu-game').remove()
    document.body.append(newDiv)
    let newBttnRestart = document.createElement('button')
    newBttnRestart.innerHTML = 'Replay'
    newBttnRestart.setAttribute('id', 'restart-game')
    document.body.append(newBttnRestart)
    let newBttn = document.createElement('button')
    newBttn.innerHTML = 'Main Menu'
    newBttn.setAttribute('id', 'main-menu')
    document.body.append(newBttn)
  }
  rightWord = ''
  wrongWords = ''
  definition = ''
}

const checkAnswer = _ => {
  console.log(event.target.textContent)
  console.log(event.target.dataset.points)
  if (event.target.textContent === rightWord) {
    let currentPlayerIndex = event.target.dataset.points
    players[currentPlayerIndex].playersPoints++
    console.log(players[currentPlayerIndex].playersPoints)
    // call disableButtons(event.target.className)
    // logic to check answer
    // update score -- instead of the index value you are using the event.target.data-points as the index
  } else if (event.target.textContent !== rightWord) {
    let currentPlayerIndex = event.target.dataset.points
    players[currentPlayerIndex].playersPoints--
    console.log(players[currentPlayerIndex].playersPoints)
  } disableButtons()
}

const disableButtons = (className) => {
  // https://stackoverflow.com/questions/15843581/how-to-correctly-iterate-through-getelementsbyclassname
  // logic for disabling buttons
  let currentPlayerIndex = event.target.dataset.points
  let celem = document.querySelectorAll('.choiceButton' + players[currentPlayerIndex].playersName)
  if (genTrivia === true) {
    for (let j = 0; j < 4; j++) {
      celem[j].disabled = true
    }
  } if (urbanDict === true) {
    for (let j = 0; j < 4; j++) {
      celem[j].disabled = true
    }
  } if (lyricGame === true) {
    for (let j = 0; j < 4; j++) {
      celem[j].disabled = true
    }
  } if (movietrivia === true) {
    for (let j = 0; j < 4; j++) {
      celem[j].disabled = true
    }
  } if (musicGame === true) {
    for (let j = 0; j < 4; j++) {
      celem[j].disabled = true
    }
  } if (kanyeTrump === true) {
    for (let j = 0; j < 2; j++) {
      celem[j].disabled = true
    }
  }
}

// document.addEventListener('click', event => {
//   if (document.querySelector('#next-question')) {
//     nextQuestionButton()
//   }
// })
document.addEventListener('click', event => {
  if (event.target.id === 'next-question') {
    console.log(event.target.dataset.points)
    for (let i = 0; i < playerCount; i++) {
      document.querySelector('#' + players[i].playersName + 'Points').textContent = players[i].playersName + ` ` + ` Points: ` + players[i].playersPoints
      let celem = document.querySelectorAll('.choiceButton' + players[i].playersName)
      for (let j = 0; j < options; j++) {
        celem[j].disabled = false
      }
    }
    if (genTrivia === true) {
      answerArrayTrivia = []
      getGenTriviaQuestion()
    } else if (urbanDict === true) {
      initUrbanGame()
    } else if (lyricGame === true) {
      startLyricGame()
    } else if (movietrivia === true) {
      startMovieGame()
    } else if (musicGame === true) {
      musicOptionsArray = []
      getSong()
    } else if (kanyeTrump === true) {
      getGiphy()
      getQuote()
    } else {
      console.log('oh snap')
    }
  }
})
// const nextQuestionButton = () => {
//   // remove disabled button class
//   console.log(event.target.dataset.points)
//   let currentPlayerIndex = event.target.dataset.points
//   // players.forEach(function (player) {
//   //   // console.log(player)
//   //   document.querySelector('#' + players[player].playersName + 'Points').textContent = players[player].playersName + ` ` + ` Points: ` + players[player].playersPoints
//   // })
//   // let celem = document.querySelectorAll('.choiceButton' + players[currentPlayerIndex].playersName)
//   // for (let j = 0; j < options; j++) {
//   //   celem[j].disabled = false
//   // }
//   // // updates html with points
//   document.querySelector('#' + players[currentPlayerIndex].playersName + 'Points').textContent = players[currentPlayerIndex].playersName + ` ` + ` Points: ` + players[currentPlayerIndex].playersPoints
//   // runs func for new question
//   if (genTrivia === true) {
//     answerArrayTrivia = []
//     getGenTriviaQuestion()
//   } else if (urbanDict === true) {
//     initUrbanGame()
//   } else if (lyricGame === true) {
//     startLyricGame()
//   } else if (movietrivia === true) {
//     startMovieGame()
//   } else if (musicGame === true) {
//     musicOptionsArray = []
//     getSong()
//   } else if (kanyeTrump === true) {
//     getGiphy()
//     getQuote()
//   } else {
//     console.log('oh snap')
//   }
// }
// document.addEventListener('click', event => {
//   console.log('inside giant ass document click function')
//   console.log(players)
//   for (let i = 0; i < playerCount; i++) {
//     // playersName is logging as undefined
//     if (event.target.className === 'choiceButton' + players[i].playersName && event.target.innerHTML === rightWord) {
//       console.log('right word selection')
//       console.log(event.target.innerHTML === rightWord)
//       let celem = document.querySelectorAll('.choiceButton' + players[i].playersName)
//       if (genTrivia === true) {
//         for (let j = 0; j < 4; j++) {
//           celem[j].disabled = true
//         }
//       } if (urbanDict === true) {
//         for (let j = 0; j < 4; j++) {
//           celem[j].disabled = true
//         }
//       } if (lyricGame === true) {
//         for (let j = 0; j < 4; j++) {
//           celem[j].disabled = true
//         }
//       } if (movietrivia === true) {
//         for (let j = 0; j < 4; j++) {
//           celem[j].disabled = true
//         }
//       } if (musicGame === true) {
//         for (let j = 0; j < 4; j++) {
//           celem[j].disabled = true
//         }
//       } if (kanyeTrump === true) {
//         for (let j = 0; j < 2; j++) {
//           celem[j].disabled = true
//         }
//       }
//       players[i].playersPoints++
//     } if (event.target.className === 'choiceButton' + players[i].playersName && event.target.textContent !== rightWord) {
//       // console.log(event.target)
//       console.log('incorrect word selection')
//       console.log(event.target.textContent !== rightWord)
//       let celem = document.querySelectorAll('.choiceButton' + players[i].playersName)
//       if (genTrivia === true) {
//         for (let j = 0; j < 4; j++) {
//           celem[j].disabled = true
//         }
//       } if (urbanDict === true) {
//         for (let j = 0; j < 4; j++) {
//           celem[j].disabled = true
//         }
//       } if (lyricGame === true) {
//         for (let j = 0; j < 4; j++) {
//           celem[j].disabled = true
//         }
//       } if (movietrivia === true) {
//         for (let j = 0; j < 4; j++) {
//           celem[j].disabled = true
//         }
//       } if (musicGame === true) {
//         for (let j = 0; j < 4; j++) {
//           celem[j].disabled = true
//         }
//       } if (kanyeTrump === true) {
//         for (let j = 0; j < 2; j++) {
//           celem[j].disabled = true
//         }
//       }
//       players[i].playersPoints--
//     } if (event.target.id === 'next-question') {
//       // if you are trying to grab by ID then use .getbyID (look it up)
//       // innerHTML on this is breaking
//       console.log('next question button')
//       console.log(document.querySelector(`#${players[i].playersName}Points`))
//       document.querySelector('#' + players[i].playersName + 'Points').textContent = players[i].playersName + ` ` + ` Points: ` + players[i].playersPoints
//       let celem = document.querySelectorAll('.choiceButton' + players[i].playersName)
//       console.log(celem)
//       for (let j = 0; j < options; j++) {
//         celem[j].disabled = false
//       }
//     }
//   }

//   if (genTrivia === true) {
//     answerArrayTrivia = []
//     getGenTriviaQuestion()
//   } else if (urbanDict === true) {
//     initUrbanGame()
//   } else if (lyricGame === true) {
//     startLyricGame()
//   } else if (movietrivia === true) {
//     startMovieGame()
//   } else if (musicGame === true) {
//     musicOptionsArray = []
//     getSong()
//   } else if (kanyeTrump === true) {
//     getGiphy()
//     getQuote()
//   } else {
//     console.log('oh snap')
//   }
// }
// )
// document.getElementById('pickle').on('click', event => {

// })
document.addEventListener('click', event => {
  if (event.target.id === 'main-menu') {
    window.location.reload()
  }
})
// To end game
document.addEventListener('click', event => {
  for (let i = 0; i < playerCount; i++) {
    if (event.target.id === 'next-question' && players[i].playersPoints >= 5) {
      console.log('inside end game func')
      endGamePrompt()
    }
  }
})

// document.getElementById("next-question").addEventListener('click', NextButtonFunc)
// function NextButtonFunc () {
//   let val = checkScore()
//   if (val === false) {
//     initUrbanGame()
//   } else {
//     endGamePrompt()
//   }
// }
// function checkScore () {
//   let winner = false
//   for (let i = 0; i < playerCount; i++) {
//     if (players[i].playersPoints > 2) {
//       winner = true
//     }
//     return winner
//   }
// }

// --------------------------------------------------- Kanye v Trump Game---------------------------------------------------------
let apiList = ['https://cors-anywhere.herokuapp.com/https://api.kanye.rest', 'https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/random/quote']
let randomApi
let giphySelection
let answerOptionsKT = ['Kanye', 'Trump']

const assignPlayersKT = _ => {
  for (let i = 0; i < playerCount; i++) {
    let newDiv = document.createElement('div')
    newDiv.innerHTML = players[i].playersName + ` ` + ` Points: `
    newDiv.setAttribute('id', players[i].playersName + 'Points')
    players[i].playersPoints = 0
    document.querySelector('#score-board').appendChild(newDiv)
  }
}

const renderChoicesKT = _ => {
  for (let i = 0; i < playerCount; i++) {
    let createPlayerDiv = document.createElement('div')
    createPlayerDiv.setAttribute('class', 'playerButtonNames')
    createPlayerDiv.innerHTML = `${players[i].playersName}`
    document.querySelector('#game-choices').append(createPlayerDiv)
    // Creating the options for each player
    for (let j = 0; j < 2; j++) {
      let createOptionButtons = document.createElement('button')
      createOptionButtons.setAttribute('class', 'choiceButton' + players[i].playersName)
      createOptionButtons.innerHTML = `${answerOptionsKT[j]}`
      createOptionButtons.setAttribute('onclick', 'checkAnswer()')
      createOptionButtons.setAttribute('data-points', i)
      document.querySelector('#game-choices').append(createOptionButtons)
    }
  }
}

// if Trump, grab value; Kanye, grab quote
const getQuote = () => {
  randomApi = Math.floor(Math.random() * apiList.length)
  fetch(apiList[randomApi])
    .then(r => r.json())
    .then(r => {
      if (randomApi === 0) {
        let kanyeQuote = document.getElementById('game-question')
        kanyeQuote.innerHTML = r.quote
        rightWord = 'Kanye'
        giphySelection = 'Kanye'
      } else {
        let trumpQuote = document.getElementById('game-question')
        trumpQuote.innerHTML = r.value
        rightWord = 'Trump'
        giphySelection = 'Trump'
      }
    })
    .catch(e => {
    })
}

// document.addEventListener('click', event => {
//   for (let i = 0; i < playerCount; i++) {
//     if (event.target.className === 'choiceButton' + players[i].playersName && event.target.innerHTML === rightWord) {
//       let celem = document.querySelectorAll('.choiceButton' + players[i].playersName)
//       for (let j = 0; j < 2; j++) {
//         celem[j].disabled = true
//       }
//       players[i].playersPoints++
//     } if (event.target.className === 'choiceButton' + players[i].playersName && event.target.innerHTML !== rightWord) {
//       let celem = document.querySelectorAll('.choiceButton' + players[i].playersName)
//       for (let j = 0; j < 2; j++) {
//         celem[j].disabled = true
//       }
//       players[i].playersPoints--
//     } if (event.target.id === "next-question") {
//       document.querySelector('#' + players[i].playersName + 'Points').innerHTML = players[i].playersName + ` ` + ` Points: ` + players[i].playersPoints
//       getGiphy()
//       getQuote()
//       for (let i = 0; i < playerCount; i++) {
//         let celem = document.querySelectorAll('.choiceButton' + players[i].playersName)
//         for (let j = 0; j < 2; j++) {
//           celem[j].disabled = false
//         }
//       }
//     }
//   }
// }
// )

const getGiphy = () => {
  fetch(`https://cors-anywhere.herokuapp.com/https://api.giphy.com/v1/gifs/search?api_key=CUKJmcJMux05tWZr0IFYGFlN37Z3N3op&q=${giphySelection}&limit=25&offset=0&rating=PG&lang=en`)
    .then(r => r.json())
    .then(r => {
      let randomGif = Math.floor(Math.random() * r.data.length)
      let giphyImage = r.data[randomGif].images.fixed_height.url
      document.querySelector('#game-answer').innerHTML = `<img src ="${giphyImage}">`
    })
}
// -----------------------------------------------------------------Music Game ---------------------------------------
let musicAnswerArray = []
let musicOptionsArray = []

let songNumber
let songTrack

// const clearMusicArray = () => {
//   musicAnswerArray = []
// }

// function to generate choice buttons
// const appendAnswerButtons = () => {
//   shuffle(musicOptionsArray)
//   for (let i = 0; i < musicOptionsArray.length; i++) {
//     answerButton = document.createElement('button')
//     answerButton.textContent = musicOptionsArray[i]
//     answerButton.className = 'answer-button'
//     document.querySelector('#answer-choices').append(answerButton)
//   }
// }
const renderChoicesMusic = _ => {
  console.log('renderChoicesMusic function start')
  console.log('should be game choices div:', document.querySelector('#game-choices'))
  document.querySelector('#game-choices').innerHTML = ''
  shuffle(musicOptionsArray)
  for (let i = 0; i < playerCount; i++) {
    let createPlayerDiv = document.createElement('div')
    createPlayerDiv.setAttribute('class', 'playerButtonNames')
    createPlayerDiv.innerHTML = `${players[i].playersName}`
    document.querySelector('#game-choices').append(createPlayerDiv)
    // Creating the options for each player
    for (let j = 0; j < 4; j++) {
      let createOptionButtons = document.createElement('button')
      createOptionButtons.setAttribute('class', 'choiceButton' + players[i].playersName)
      createOptionButtons.innerHTML = `${musicOptionsArray[j]}`
      createOptionButtons.setAttribute('onclick', 'checkAnswer()')
      createOptionButtons.setAttribute('data-points', i)
      document.querySelector('#game-choices').append(createOptionButtons)
    }
  }
}

const assignPlayersMusic = _ => {
  console.log('assignPlayersMusic hit')
  for (let i = 0; i < playerCount; i++) {
    let newDiv = document.createElement('div')
    newDiv.innerHTML = players[i].playersName + ` ` + ` Points: `
    newDiv.setAttribute('id', players[i].playersName + 'Points')
    newDiv.className = 'music-answer-button'
    players[i].playersPoints = 0
    document.querySelector('#score-board').appendChild(newDiv)
  }
}

const getSong = () => {
  musicAnswerArray = []
  musicOptionsArray = []
  fetch('http://api.napster.com/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4')
    .then(r => r.json())
    .then(r => {
      // random number to grab random song
      songNumber = Math.floor(Math.random() * r.tracks.length)

      // generate array of all available tracks names and artist
      for (let i = 0; i < r.tracks.length; i++) {
        musicAnswerArray.push(`${r.tracks[i].name} - ${r.tracks[i].artistName}`)
      }
      musicAnswerArray.splice(songNumber, 1)
      shuffle(musicAnswerArray)

      // grab random song from array list and play
      songTrack = r.tracks[songNumber].previewURL
      rightWord = `${r.tracks[songNumber].name} - ${r.tracks[songNumber].artistName}`
      document.querySelector('#game-question').innerHTML = `<iframe src="${songTrack}" allow="autoplay" id="audio"></iframe>`

      // put the correct answer in the music array
      musicAnswerArray.unshift(`${r.tracks[songNumber].name} - ${r.tracks[songNumber].artistName}`)

      // loop to create options array of 4 options
      for (let i = 0; i < 4; i++) {
        musicOptionsArray.push(musicAnswerArray[i])
      }

      // shuffle the options in next function call
      document.querySelector('#game-choices').innerHTML = ''
      renderChoicesMusic()
    })
}

// document.addEventListener('click', event => {
//   if (event.target.className === 'music-answer-button' && event.target.innerHTML === rightWord) {
//   } else if (event.target.className === 'music-answer-button' && event.target.innerHTML !== rightWord) {
//   } else if (event.target.id === "next-question") {
//     getSong()
//   }
// })

// --------------------------------------------General Trivia -----------------------------------------------------------------
let questionNum
let categoryButton
let difficultyButton
let triviaCategory = [
  {
    name: 'General',
    value: 9
  },
  {
    name: 'Books',
    value: 10
  },
  {
    name: 'Film',
    value: 11
  },
  {
    name: 'Music',
    value: 12
  },
  {
    name: 'Musicals & Theatres',
    value: 13
  },
  {
    name: 'Television',
    value: 14
  },
  {
    name: 'Video Games',
    value: 15
  },
  {
    name: 'Board Games',
    value: 16
  },
  {
    name: 'Science & Nature',
    value: 17
  },
  {
    name: 'Computers',
    value: 18
  },
  {
    name: 'Mathematics',
    value: 19
  },
  {
    name: 'Mythology',
    value: 20
  },
  {
    name: 'Sports',
    value: 21
  },
  {
    name: 'Geography',
    value: 22
  },
  {
    name: 'History',
    value: 23
  },
  {
    name: 'Politics',
    value: 24
  },
  {
    name: 'Art',
    value: 25
  },
  {
    name: 'Celebrities',
    value: 26
  },
  {
    name: 'Animals',
    value: 27
  },
  {
    name: 'Vehicle',
    value: 28
  },
  {
    name: 'Comics',
    value: 29
  },
  {
    name: 'Gadgets',
    value: 30
  },
  {
    name: 'Anime & Manga',
    value: 31
  },
  {
    name: 'Cartoon & Animations',
    value: 32
  }]

let triviaDifficulty = ['easy', 'medium', 'hard']
let selectedCategory
let selectedDifficulty
let answerArrayTrivia = []

const assignPlayersGenTrivia = _ => {
  answerArrayTrivia = []
  for (let i = 0; i < playerCount; i++) {
    let newDiv = document.createElement('div')
    newDiv.innerHTML = players[i].playersName + ` ` + ` Points: `
    newDiv.setAttribute('id', players[i].playersName + 'Points')
    players[i].playersPoints = 0
    // newDiv.setAttribute('class', 'playersPoints')
    document.querySelector('#score-board').appendChild(newDiv)
  }
}

const renderChoicesGenTrivia = _ => {
  document.querySelector('#game-choices').innerHTML = ''
  shuffle(answerArrayTrivia)
  for (let i = 0; i < playerCount; i++) {
    let createPlayerDiv = document.createElement('div')
    createPlayerDiv.innerHTML = `${players[i].playersName}`
    createPlayerDiv.setAttribute('class', 'playerButtonNames')
    document.querySelector('#game-choices').append(createPlayerDiv)

    // Creating the options for each player
    for (let j = 0; j < 4; j++) {
      let createOptionButtons = document.createElement('button')
      createOptionButtons.setAttribute('class', 'choiceButton' + players[i].playersName)
      createOptionButtons.innerHTML = `${answerArrayTrivia[j]}`
      createOptionButtons.setAttribute('onclick', 'checkAnswer()')
      createOptionButtons.setAttribute('data-points', i)
      document.querySelector('#game-choices').append(createOptionButtons)
    }
  }
}

// comment out this functin out when implementing into framework
// const appendTriviaButtons = () => {
//     document.querySelector('#game-choices').innerHTML = ''
//     shuffle(answerArrayTrivia)
//     for (let i = 0; i < answerArrayTrivia.length; i++) {
//         answerButton = document.createElement('button')
//         answerButton.textContent = answerArrayTrivia[i]
//         answerButton.className = 'answer-button'
//         document.querySelector('#game-choices').append(answerButton)
//     }
// }

const startGenTrivia = () => {
  // start game - prompts user to select a category
  document.querySelector('#user-prompt').innerHTML = '<p>Select a Category!</p>'
  for (let i = 0; i < triviaCategory.length; i++) {
    categoryButton = document.createElement('button')
    categoryButton.textContent = triviaCategory[i].name
    categoryButton.className = 'category-button'
    categoryButton.setAttribute('id', triviaCategory[i].value)
    document.querySelector('#user-prompt').append(categoryButton)
  }
}

const selectDifficulty = () => {
  // this is initiatived after user selects a category
  document.querySelector('#user-prompt').innerHTML = '<p>Select Difficulty</p>'
  for (let i = 0; i < triviaDifficulty.length; i++) {
    difficultyButton = document.createElement('button')
    difficultyButton.textContent = triviaDifficulty[i]
    difficultyButton.className = 'difficulty-button'
    document.querySelector('#user-prompt').append(difficultyButton)
  }
}

const getGenTriviaQuestion = () => {
  document.querySelector('#user-prompt').innerHTML = ''
  document.querySelector('#user-prompt').innerHTML = ''
  fetch(`https://opentdb.com/api.php?amount=15&category=${selectedCategory}&difficulty=${selectedDifficulty}&type=multiple`)
    .then(r => r.json())
    .then(r => {
      questionNum = 0

      // show trivia question in HTML
      document.querySelector('#game-question').innerHTML = r.results[questionNum].question

      // push incorrect answers to answerArray
      for (let i = 0; i < r.results[questionNum].incorrect_answers.length; i++) {
        answerArrayTrivia.push(r.results[questionNum].incorrect_answers[i])
      }

      // push correct answer to answerArray
      answerArrayTrivia.push(r.results[questionNum].correct_answer)

      // declare correct answer text for validation
      rightWord = r.results[questionNum].correct_answer

      // comment this out and change to renderChoicesGenTrivia() when integrating
      renderChoicesGenTrivia()
    })
}

// event listener for selecting category
document.addEventListener('click', event => {
  if (event.target.className === 'category-button') {
    selectedCategory = event.target.id
    selectDifficulty()
  }
  if (event.target.className === 'difficulty-button') {
    selectedDifficulty = event.target.textContent
    getGenTriviaQuestion()
  }

  // if (event.target.className === 'answer-button') {
  //   let selectedAnswer = event.target.textContent
  //   if (selectedAnswer === rightWord) {
  //     answerArrayTrivia = []
  //     getGenTriviaQuestion()
  //   } else if (selectedAnswer !== rightWord) {
  //     answerArrayTrivia = []
  //     getGenTriviaQuestion()
  //   }
  // }
})
// -----------------------------------------------------Movie Game-------------------------------------------------------
let yearArray = ['1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
let answerArrayMovie = ['0% - 25%', '26% - 50%', '51% - 75%', '76% - 100%']
let randomNumber
let randomYear
let randomMovie
let imageURL
let movieName
let movieDesc
let movieRating
let randomNumber2

const assignPlayersMovie = _ => {
  for (let i = 0; i < playerCount; i++) {
    let newDiv = document.createElement('div')
    newDiv.innerHTML = players[i].playersName + ` ` + ` Points: `
    newDiv.setAttribute('id', players[i].playersName + 'Points')
    players[i].playersPoints = 0
    // newDiv.setAttribute('class', 'playersPoints')
    document.querySelector('#score-board').appendChild(newDiv)
  }
}

const renderChoicesMovie = _ => {
  for (let i = 0; i < playerCount; i++) {
    let createPlayerDiv = document.createElement('div')
    createPlayerDiv.innerHTML = `${players[i].playersName}`
    createPlayerDiv.setAttribute('class', 'playerButtonNames')
    document.querySelector('#game-choices').append(createPlayerDiv)

    // Creating the options for each player
    // document.querySelector('#game-choices').innerHTML = ''
    // document.querySelector('#game-choices').textContent = 'What is the Rotten Tomatoes Score?'
    for (let j = 0; j < 4; j++) {
      let createOptionButtons = document.createElement('button')
      createOptionButtons.setAttribute('class', 'choiceButton' + players[i].playersName)
      createOptionButtons.innerHTML = `${answerArrayMovie[j]}`
      createOptionButtons.setAttribute('onclick', 'checkAnswer()')
      createOptionButtons.setAttribute('data-points', i)
      createOptionButtons.setAttribute('id', j)
      document.querySelector('#game-choices').append(createOptionButtons)
    }
  }
}

// const createMovieButtons = () => {
//   document.querySelector('#game-choices').innerHTML = ''
//   document.querySelector('#game-choices').textContent = 'What is the Rotten Tomatoes Score?'
//   for (let i = 0; i < answerArrayMovie.length; i++) {
//     answerButton = document.createElement('button')
//     answerButton.textContent = answerArrayMovie[i]
//     answerButton.className = 'answer-button'
//     answerButton.setAttribute('id', i)
//     document.querySelector('#game-choices').append(answerButton)
//   }
// }

const startMovieGame = () => {
  randomNumber = Math.floor(Math.random() * yearArray.length)
  randomYear = yearArray[randomNumber]
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=a40d25ac7676d4efb7023209fb38276f&primary_release_year=${randomYear}&sort_by=popularity.desc`)
    .then(r => r.json())
    .then(r => {
      randomNumber2 = Math.floor(Math.random() * r.results.length)
      randomMovie = r.results[randomNumber2].original_title
      fetch(`http://www.omdbapi.com/?t=${randomMovie}&apikey=7be547a6&type=movie`)
        .then(r => r.json())
        .then(r => {
          imageURL = r.Poster
          movieName = r.Title
          movieDesc = r.Plot
          movieRating = parseInt(r.Ratings[1].Value)
          document.querySelector('#game-question').innerHTML = `
                        <img src="${imageURL}" alt="movie poster">
                        <h2>${movieName}</h2>
                        <p>${movieDesc}</p>`

          if (movieRating <= 25) {
            rightWord = `0% - 25%`
          } else if (movieRating > 25 && movieRating <= 50) {
            rightWord = `26% - 50%`
          } else if (movieRating > 50 && movieRating <= 75) {
            rightWord = `51% - 75%`
          } else if (movieRating > 75 && movieRating <= 100) {
            rightWord = `76% - 100%`
          }
        })
    })
}

// document.addEventListener('click', event => {
//   if (event.target.className === 'answer-button' && event.target.textContent === rightWord) {
//   } else if (event.target.className === 'answer-button' && event.target.textContent !== rightWord) {
//   } else if (event.target.id === "next-question") {
//     startMovieGame()
//   }
// })

// -----------------------------Lyric Game-------------------------

let randomTrack
let correctLyricName
let correctArtistName
let trackId
let fullLyric
let splitLyric

let lyricAnswerArray = []
let lyricOptionsArray = []

const assignPlayersLyric = _ => {
  for (let i = 0; i < playerCount; i++) {
    let newDiv = document.createElement('div')
    newDiv.innerHTML = players[i].playersName + ` ` + ` Points: `
    newDiv.setAttribute('id', players[i].playersName + 'Points')
    players[i].playersPoints = 0
    // newDiv.setAttribute('class', 'playersPoints')
    document.querySelector('#score-board').appendChild(newDiv)
  }
}

const renderChoicesLyric = _ => {
  shuffle(lyricOptionsArray)

  for (let i = 0; i < playerCount; i++) {
    let createPlayerDiv = document.createElement('div')
    createPlayerDiv.innerHTML = `${players[i].playersName}`
    createPlayerDiv.setAttribute('class', 'playerButtonNames')
    document.querySelector('#game-choices').append(createPlayerDiv)

    // Creating the options for each player
    for (let j = 0; j < 4; j++) {
      let createOptionButtons = document.createElement('button')
      createOptionButtons.setAttribute('class', 'choiceButton' + players[i].playersName)
      createOptionButtons.innerHTML = `${lyricOptionsArray[j]}`
      createOptionButtons.setAttribute('data-points', i)
      createOptionButtons.setAttribute('onclick', 'checkAnswer()')
      document.querySelector('#game-choices').append(createOptionButtons)
    }
  }
}

const startLyricGame = () => {
  lyricAnswerArray = []
  lyricOptionsArray = []
  randomTrack = Math.floor(Math.random() * 100)
  fetch('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=100&country=us&f_has_lyrics=1&apikey=b97562d1cb4613c6b54db276ba8591dc')
    .then(r => r.json())
    .then(r => {
      correctLyricName = r.message.body.track_list[randomTrack].track.track_name
      correctArtistName = r.message.body.track_list[randomTrack].track.artist_name
      rightWord = `${correctLyricName} - ${correctArtistName}`
      trackId = r.message.body.track_list[randomTrack].track.track_id
      fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=b97562d1cb4613c6b54db276ba8591dc`)
        .then(r => r.json())
        .then(r => {
          fullLyric = r.message.body.lyrics.lyrics_body
          splitLyric = fullLyric.split('*')
          document.querySelector('#game-question').innerHTML = splitLyric[0]
        })

      // create an array of ALL lyric song names and artist
      for (let i = 0; i < r.message.body.track_list.length; i++) {
        lyricAnswerArray.push(`${r.message.body.track_list[i].track.track_name} - ${r.message.body.track_list[i].track.artist_name}`)
      }

      // remove correct song from a lyricAnswerArray
      lyricAnswerArray.splice(randomTrack, 1)
      shuffle(lyricAnswerArray)

      // put correct answer in index 0 in lyricAnswerArray
      lyricAnswerArray.unshift(`${correctLyricName} - ${correctArtistName}`)

      // create lyricOptionsArray
      for (let i = 0; i < 4; i++) {
        lyricOptionsArray.push(lyricAnswerArray[i])
      }

      document.querySelector('#game-choices').innerHTML = ''
      renderChoicesLyric()
    })
}
