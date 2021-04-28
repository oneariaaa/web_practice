const b1 = document.getElementById('p1');
const b2 = document.getElementById('p2');
const b3 = document.getElementById('reset');
const left = document.querySelectorAll('span')[0];
const right = document.querySelectorAll('span')[1];
const rule = document.querySelector('#rule');

let p1Score = 0;
let p2Score = 0;
let winningScore = 10;
let isGameOver = false;

rule.addEventListener('change', function (e) {
    winningScore = parseInt(this.value);
    reset();
})

b1.addEventListener('click', function (e) {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            left.classList.add('winner');
            right.classList.add('loser');
        }
        left.textContent = p1Score;
    }
})

b2.addEventListener('click', function (e) {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            left.classList.add('loser');
            right.classList.add('winner');
        }
        right.textContent = p2Score;
    }
})

b3.addEventListener('click', reset);

function reset() {
    p1Score = 0;
    p2Score = 0;
    left.innerText = '0';
    right.innerText = '0';
    isGameOver = false;
    left.classList.remove('winner', 'loser');
    right.classList.remove('winner', 'loser');
}

function makeColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    //let randomColor = ;
}

function set(color, delay,doNext) {
    setTimeout(() => {
        document.body.backgroundColor = color;
    }, delay);
    set(color, 1000);
}

set('olive', 3000);