// Javascript for tic-tac-toe
// most variables are here
////////////////////////////////////////////////////////////////////////
const player1 = ""
const player2 = ""
let playerTurnIs = "X"
const tile1 = document.querySelector('.tile1')
const tile2 = document.querySelector('.tile2')
const tile3 = document.querySelector('.tile3')
const tile4 = document.querySelector('.tile4')
const tile5 = document.querySelector('.tile5')
const tile6 = document.querySelector('.tile6')
const tile7 = document.querySelector('.tile7')
const tile8 = document.querySelector('.tile8')
const tile9 = document.querySelector('.tile9')
const playerTurnSpan = document.querySelector('.playerTurn')

// Most functions here
//////////////////////////////////////////////////////////////////////////
function displayPlayerTurn () {
    playerTurnSpan.innerHTML = playerTurnIs;
}

displayPlayerTurn()

let tiles = document.querySelectorAll('.tile')

tiles.forEach(function (tile) {
    tile.addEventListener('click', gameEvents)
  })

function winCheck1 (event) {
    if (event.target === tile1) {
        if (tile2.innerText === playerTurnIs && tile3.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })
        } else if (tile4.innerText === playerTurnIs && tile7.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })
        } else if (tile5.innerText === playerTurnIs && tile9.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })    
        }
    }
}

function winCheck2 (event) {
    if (event.target === tile2) {
        if (tile1.innerText === playerTurnIs && tile3.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })
        } else if (tile5.innerText === playerTurnIs && tile8.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })  
        }
    }
}

function winCheck3 (event) {
    if (event.target === tile3) {
        if (tile2.innerText === playerTurnIs && tile1.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })
        } else if (tile6.innerText === playerTurnIs && tile9.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })
        } else if (tile5.innerText === playerTurnIs && tile7.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })    
        }
    }
}

function winCheck4 (event) {
    if (event.target === tile4) {
        if (tile5.innerText === playerTurnIs && tile6.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })
        } else if (tile1.innerText === playerTurnIs && tile7.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })
        }   
    }
}

function winCheck5 (event) {
    if (event.target === tile5) {
        if (tile4.innerText === playerTurnIs && tile6.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })
        } else if (tile2.innerText === playerTurnIs && tile8.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })
        } else if (tile1.innerText === playerTurnIs && tile9.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })
        } else if (tile3.innerText === playerTurnIs && tile7.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            }) 
        }      
    }
}

function winCheck6 (event) {
    if (event.target === tile6) {
        if (tile4.innerText === playerTurnIs && tile5.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })
        } else if (tile3.innerText === playerTurnIs && tile9.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })
        }    
    }
}

function winCheck7 (event) {
    if (event.target === tile7) {
        if (tile8.innerText === playerTurnIs && tile9.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })
        } else if (tile1.innerText === playerTurnIs && tile4.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })
        } else if (tile3.innerText === playerTurnIs && tile5.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })   
        } 
    }
}

function winCheck8 (event) {
    if (event.target === tile8) {
        if (tile7.innerText === playerTurnIs && tile9.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })
        } else if (tile2.innerText === playerTurnIs && tile5.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            }) 
        }
    }
}

function winCheck9 (event) {
    if (event.target === tile9) {
        if (tile7.innerText === playerTurnIs && tile8.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })
        } else if (tile3.innerText === playerTurnIs && tile6.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })
        } else if (tile1.innerText === playerTurnIs && tile5.innerText === playerTurnIs) {
            console.log("You're a wiener");
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', gameEvents)
            })    
        }
    }
}

function winCheckTotal (event) {
    winCheck1(event);
    winCheck2(event);
    winCheck3(event);
    winCheck4(event);
    winCheck5(event);
    winCheck6(event);
    winCheck7(event);
    winCheck8(event);
    winCheck9(event);
}

// check draw does not work. figure out at later date

// function checkDraw () {
//     let checkDrawArray = [];
//     tiles.forEach(function (tile) { 
//         checkDrawArray.push(tile);
//         console.log(tile);
//         //console.log(checkDrawArray);     

//     if (checkDrawArray.includes(".")) {
//         console.log("No Draw")                
//     } else if (!checkDrawArray.includes(".")) {
//         console.log("It's a Draw!")
//     }
// })
// }

// This is main gameplay function
function gameEvents(event) {
    if (event.target.innerText === ".") {
        event.target.innerText = (playerTurnIs);
        
        winCheckTotal(event);
        // checkDraw();
        if (playerTurnIs === "X") {
        playerTurnIs = "O";
        }   else {
        playerTurnIs = "X"  
        }
        displayPlayerTurn()                        
    }  
 
}      

// This resets the game

let button = document.querySelector('.reset')

button.addEventListener('click', resetBoard)

function resetBoard () {
    tiles.forEach(function (tile) {
        tile.addEventListener('click', gameEvents)
    })
    tiles.forEach(function (tile) {
        tile.innerText = "."
    })
    playerTurnIs = "X"
    displayPlayerTurn()
}

// make new array to hold player input values?

// // if array[0] && array[1] && array[2] === playerTurnIs {
//     do stuff
// }

// possible for loop to make new arrray and check win conditions? 

// tileArray = [tile1, tile2, tile3, etc]
// tileArray.forEach(i = 0, tileArray.length, i++) {
//    const newTileArray = newTileArray.push[i]
// }

// // [1,2,3,4,5,6,7,8,9]
// === array in qustion[values]
// row win conditions
// let winRowArray = [ 
//  [1,2,3],
//  [4,5,6], 
//  [7,8,9]
// ]

// winRowArray[0] === ['X', 'X', 'X'] || ['O', 'O', 'O'] , winRowArray[1], winRowArray[2]

// column win conditions
// C[1,4,7]
// C[2,5,8]
// C[3,6,9]

// Diagonal win conditions
// D[1,5,9]
// D[3,5,7


// let minutes =  27
// let hour = 5
// let time = hour + ":" + minutes
// let breakTotal = 15
// function comeFromBreak(breakTotal) {
//      minutes = minutes + breakTotal;
//      time = hour + ":" + minutes;
//      alert("Break is over at " + time);
// }

// comeFromBreak(breakTotal)