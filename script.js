let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ['stick'];

let hunger = 0;
let shotsFired = false

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const monsterStats = document.querySelector('#monsterStats');
const monsterNameText = document.querySelector('#monsterNameText');
const monsterHealthText = document.querySelector('#monsterHealthText');

const hungerText = document.querySelector('#hungerText');

const button4 = document.querySelector('#button4');

// initialize buttons
button1.onclick = goOutside;
button2.onclick = radio;
button3.onclick = rest;

button4.onclick = hunt

function goOutside() {
    button1.innerText = 'Go into the forest';
    button2.innerText = 'Farm';
    button3.innerText = 'Go inside';
    button1.onclick = goForest;
    button2.onclick = farm;
    button3.onclick = goInside;
    hunger += 1;
    hungerText.innerText = hunger
}

function radio() {
    button1.innerText = 'Radio';
    button2.innerText = 'Rest';
    button3.innerText = 'Go outside';
    button1.onclick = radio;
    button1.onclick = rest;
    button1.onclick = goOutside;
    hunger += 1;
    hungerText.innerText = hunger
}

function rest() {
    button1.innerText = 'Radio';
    button2.innerText = 'Rest';
    button3.innerText = 'Go outside';
    button1.onclick = radio;
    button1.onclick = rest;
    button1.onclick = goOutside;
    hunger += 5;
    hungerText.innerText = hunger
}

function goInside() {
    button1.innerText = 'Radio';
    button2.innerText = 'Rest';
    button3.innerText = 'Go outside';
    button1.onclick = radio;
    button2.onclick = rest;
    button3.onclick = goOutside;
    hunger += 1;
    hungerText.innerText = hunger
}

function farm() {
    button1.innerText = 'go into the Forest';
    button2.innerText = 'Farm';
    button3.innerText = 'Go inside';
    button1.onclick = goForest;
    button2.onclick = farm;
    button3.onclick = goInside;
    hunger += 5;
    hungerText.innerText = hunger
}

function goForest() {
    button1.innerText = 'Go home';
    button2.innerText = 'Hunt';
    button3.innerText = 'Forage';
    button1.onclick = goHome;
    button2.onclick = hunt;
    button3.onclick = forage;
    hunger += 5;
    hungerText.innerText = hunger
}

function goHome() {
    hunger += 5;
    hungerText.innerText = hunger
    button1.innerText = 'Go into the forest';
    button2.innerText = 'Farm';
    button3.innerText = 'Go inside';
    button1.onclick = goForest;
    button2.onclick = farm;
    button3.onclick = goInside;
}

function hunt() {
    hunger += 5;
    hungerText.innerText = hunger;
    if (shotsFired === true) {
        console.log('random forest encounter')
    } else {
        const ranNum3 = Math.floor(Math.random() * 3) + 1;
        if (ranNum3 === 1){
            deer()
        } else if (ranNum3 === 2) {
            rabbit()
        } else {
            huntNothing()
        }
    }
}

function forage() {
    hunger += 5;
    hungerText.innerText = hunger
    if (shotsFired === true) {
        console.log('random forest encounter')
    } else {
        button1.innerText = 'Go into the forest';
        button2.innerText = 'Farm';
        button3.innerText = 'Go inside';
        button1.onclick = goForest;
        button2.onclick = farm;
        button3.onclick = goInside;
        
    }
    
}

function deer() {
        button1.innerText = 'Shoot the deer';
        button2.innerText = 'Ignore the deer';
        button3.innerText = 'Forage';
        button1.onclick = shootDeer;
        button2.onclick = ignoreDeer;
        button3.onclick = forage;
}

function shootDeer() {
    shotsFired = true
    hunger += 1;
    hungerText.innerText = hunger
    if (shotsFired === true) {
        console.log('random forest encounter')
    } else {
        const ranNum3 = Math.floor(Math.random() * 3) + 1;
        if (ranNum3 === 3){
            hitDeer()
        } else {
            missDeer()
        }
    }
    
}

function ignoreDeer() {
    if (shotsFired === true) {
        console.log('random forest encounter')
    } else {
    button1.innerText = 'goHome';
    button2.innerText = 'Hunt';
    button3.innerText = 'Forage';
    button1.onclick = shootDeer;
    button2.onclick = ignoreDeer;
    button3.onclick = forage;
    }
}

function rabbit() {
    hunger += 5;
    hungerText.innerText = hunger
    button1.innerText = 'Shoot the rabbit';
    button2.innerText = 'Ignore the rabbit';
    button3.innerText = 'Forage';
    button1.onclick = shootRabbit;
    button2.onclick = ignoreRabbit;
    button3.onclick = forage;
}

function shootRabbit() {
    shotsFired = true
    hunger += 1;
    hungerText.innerText = hunger
    if (shotsFired === true) {
        console.log('random forest encounter')
    } else {
        const ranNum3 = Math.floor(Math.random() * 3) + 1;
        if (ranNum3 === 3){
            hitRabbit()
        } else {
            missRabbit()
        }
    }
    
}

function huntNothing() {
    hunger += 5;
    hungerText.innerText = hunger
    button1.innerText = 'Go home';
    button2.innerText = 'Hunt';
    button3.innerText = 'Forage';
    button1.onclick = goHomeForest;
    button2.onclick = hunt;
    button3.onclick = forage;
}

function goHomeForest() {
    hunger += 5;
    hungerText.innerText = hunger
    if (shotsFired === true) {
        console.log('chance for random encounter')
    } else {
        const ranNum3 = Math.floor(Math.random() * 3) + 1;
        if (ranNum3 === 1) {
            goHome()
        } else if (ranNum3 === 2) {
            lostForest()
        }else {
            console.log('special forest table')
        }
    }
}

//special forest table
//dear
//rabbit
//random encounter
  // bear
  // hostile
  // zombie
//special item
//find survivor

// function ranNum3() {
//     const ranNum = Math.floor(Math.random() * 3) + 1;
//     return ranNum
// }

// console.log(ranNum)