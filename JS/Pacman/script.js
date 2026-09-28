
var map = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,0,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,2,2],
    [2,2,1,2,2,2,2,1,2,2,2,2,1,2,1,2,2,2,1,2,1,1,2,1,2,2,2,1,1,2,1,2,2,1,2,2],
    [2,2,1,2,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,2,1,2,1,1,2,1,2,2],
    [2,2,1,1,1,2,2,2,2,2,1,1,1,1,1,2,1,2,1,2,1,1,2,1,2,1,1,2,1,2,1,1,2,1,2,2],
    [2,2,1,2,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,2,1,2,2,1,2,2,2,1,1,2,1,2,2],
    [2,2,1,2,2,2,2,1,2,2,2,2,1,2,1,2,1,1,1,2,1,2,1,1,1,2,1,1,1,1,1,2,2,2,2,2],
    [2,2,1,1,1,1,2,1,2,1,1,1,1,2,1,2,1,2,1,2,2,2,1,2,1,1,1,2,1,2,1,1,2,1,2,2],
    [2,2,1,1,1,1,2,1,2,1,1,2,1,2,1,2,1,2,1,1,1,1,1,2,2,2,1,2,1,2,2,2,2,1,2,2],
    [2,2,1,2,2,1,2,1,2,1,2,2,1,2,1,1,1,2,1,2,2,2,1,1,1,2,1,2,1,1,1,1,1,1,2,2],
    [2,2,1,2,1,1,1,1,2,1,2,1,1,2,1,2,1,2,1,2,1,2,1,2,2,2,1,2,1,2,2,2,2,1,2,2],
    [-3,0,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,1,1,1,0,3],
    [2,2,1,2,1,2,2,2,2,1,2,1,2,2,2,2,1,2,2,2,1,2,1,2,1,2,1,2,2,2,1,2,2,2,2,2],
    [2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,2,2],
    [2,2,1,2,1,2,2,1,2,1,2,1,1,2,1,2,1,2,1,2,1,2,1,2,2,2,1,2,1,2,2,2,2,1,2,2],
    [2,2,1,2,1,1,2,1,2,1,2,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,1,1,1,2,2],
    [2,2,1,2,2,2,2,1,2,2,2,2,1,2,1,2,1,2,1,2,2,2,1,2,1,1,1,2,1,2,1,1,2,2,2,2],
    [2,2,1,1,1,1,2,1,2,1,1,2,1,2,1,2,1,2,1,1,1,1,1,2,2,2,1,2,1,2,2,2,2,1,2,2],
    [2,2,1,2,2,1,2,1,2,1,2,2,1,2,1,1,1,2,1,2,2,2,1,1,1,1,1,2,1,1,1,1,1,1,2,2],
    [2,2,1,2,1,1,1,1,2,1,2,1,1,2,1,2,1,2,1,2,1,2,1,2,2,2,1,2,1,2,2,2,2,1,2,2],
    [2,2,1,2,1,2,2,2,2,1,2,1,2,2,2,2,1,2,2,2,1,2,1,2,1,2,1,2,2,2,1,1,2,1,2,2],
    [2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

var pacman = {
    x: 2,
    y: 2
}

var ghost = {
    x: 20,
    y: 11
}

var score = {
    current: 0,
    highest:0
}


let m = document.getElementById('map')
let s = document.getElementById('score')

function displayMap() {
    var output = ''

    for(let i=0; i<map.length; i++){
        output += "\n<div class='row'>\n"
        for(let j=0; j<map[i].length; j++){
            let className;
            switch(map[i][j]){
                case 2:
                    className = "brick"
                    break;
                case 1:
                    className = "coin"
                    break;
                case 0:
                case 3:
                case -3:
                    className = "empty"
                    break;
            }
            output += `\n\t<div class=${className}></div>`
        }
        output += "\n</div>"
    }
    m.innerHTML = output
}

let offSetX = 523
let offSetY = 250

function updateOffSet() {
    if (window.matchMedia("(max-width: 1080px)").matches) {
        offSetY = 250
        offSetX = 42
    } else {
        offSetX = 523
        offSetY = 250
    }

    displayPacman();
    displayGhost();
}

window.addEventListener('resize', updateOffSet)

updateOffSet()

function displayPacman() {
    document.getElementById('pac-man').style.top = (pacman.y * 24 + offSetY) + "px";
    document.getElementById('pac-man').style.left = (pacman.x * 24 + offSetX) + "px";
    console.log(pacman)
}

function displayGhost() {
    document.getElementById('ghost').style.top = (ghost.y * 24 + offSetY) + "px";
    document.getElementById('ghost').style.left = (ghost.x * 24 + offSetX ) + "px";
    console.log(ghost)
}

displayMap()
displayPacman()
displayGhost()

function displayScore() {
    s.innerHTML = score.current
}

document.onkeydown = function(e) {

    if(e.key === "ArrowRight" && map[pacman.y][pacman.x + 1] != 2){
        document.getElementById('pac-man').style.transform = 'scaleX(1)'
        pacman.x++
    } else if(e.key === "ArrowDown" && map[pacman.y + 1][pacman.x] != 2){
        pacman.y++
    } else if(e.key === "ArrowLeft" && map[pacman.y][pacman.x - 1] != 2){
        document.getElementById('pac-man').style.transform = 'scaleX(-1)'
        pacman.x--
    } else if(e.key === "ArrowUp" && map[pacman.y - 1][pacman.x] != 2){
        pacman.y--
    }

    if(map[pacman.y][pacman.x] === 1){
        map[pacman.y][pacman.x] = 0
        score.current += 10

        displayScore()
        displayMap()
    }

    if(map[pacman.y][pacman.x] === 3){
        pacman.y = 12
        pacman.x = 1
    } else if (map[pacman.y][pacman.x] === -3){
        pacman.y = 12
        pacman.x = 34
    }

    displayPacman()
}

let prevRand = null

let dist = Math.sqrt((ghost.x - pacman.x)**2 + (ghost.y - pacman.y)**2)
    console.log(Math.round(dist))

function ghostmovement() {
    let directions = ["right", "left", "up", "down"];
    let rand = Math.floor(Math.random() * directions.length);

    let newX = ghost.x;
    let newY = ghost.y;

    let canMoveUp = map[ghost.y + 1][ghost.x] !== 2
    let canMoveDown = map[ghost.y - 1][ghost.x] !== 2
    let canMoveRight = map[ghost.y][ghost.x + 1] !== 2
    let canMoveLeft = map[ghost.y][ghost.x - 1] !== 2
    
    switch(directions[rand]){
        case "right":
            if(canMoveRight){
                newX++
            }
            else if (canMoveLeft){
                newX--
            }
            else if (canMoveUp){
                newY++
            }
            else if (canMoveDown){
                newY--
            }
            break;

        case "left":
            if(canMoveLeft){
                newX--
            } else if(canMoveRight){
                newX++
            } else if(canMoveUp){
                newY++
            } else if(canMoveDown){
                newY--
            }
            break;

        case "down":
            if(canMoveDown){
                newY--
            } else if(canMoveUp){
                newY++
            } else if(canMoveRight){
                newX++
            } else if(canMoveLeft){
                newX--
            }
            break;

        case "up":
            if(canMoveUp){
                newY++
            } else if(canMoveDown){
                newY--
            } else if(canMoveRight){
                newX++
            } else if(canMoveLeft){
                newX--
            }
            break;

        default:
            break;
        }

    if(ghost.x === pacman.x && ghost.y === pacman.y){
        
        if(score.highest < score.current){
            score.highest = score.current
        }

        newX = pacman.x
        newY = pacman.y

        document.onkeydown = function(e) {e.preventDefault()}

        m.innerHTML = `<div class="results"><span id="gameover"> Game Over </span><br>
                        <span id="cscore"> Score: ${score.current}\n </span><br>
                        <span id="hscore"> Highest Score: ${score.highest}</span></div>
                        <button id="restart" onclick="restart()">Restart</button>`
    }

    ghost.x = newX;
    ghost.y = newY;

    prevRand = directions[rand]
    
    displayGhost();
}

setInterval(ghostmovement, 150);

function restart() {
    location.reload()
}