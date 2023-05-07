let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ['knife', '.38 Special', 'Fishing pole', 'First aid kit'];

let hunger = 0;
let food = 3;
let shotsFired = false
let bullets = 12

const weapons = [
    {
        name: "stick",
        power: 5
    },
    {
        name: "knife",
        power: 30
    },
    {
        name: "baseball bat"
    },
    {
        name: "axe",
        power: 50
    },
    {
        name: "katana",
        power: 100
    },
    {
        name: "chainsaw",
        power: 100
    },
    {
        name: ".38 Special",
        power: 100
    },
    {
        name: "Glock 19",
        power: 100
    },
    {
        name: "M1911",
        power: 100
    },
    {
        name: "shot gun",
        power: 100
    },
    {
        name: ".22 rifle",
        power: 100
    },
    {
        name: ".308 rifle",
        power: 100
    },
    {
        name: "AR-15",
        power: 100
    }
]



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

const settingImage = document.querySelector('.setting img');

const hungerText = document.querySelector('#hungerText');

const foodText = document.querySelector('#foodText');

const button4 = document.querySelector('#button4');

// initialize buttons
button1.onclick = goOutside;
button2.onclick = radio;
button3.onclick = rest;

button4.onclick = hunt

// Inventory Modal
let inventoryModal = document.getElementById("inventory-modal");
let inventoryModalBtn = document.getElementById("inventory-btn");
let inventoryCloseBtn = document.getElementsByClassName("inventory-close")[0];

inventoryModalBtn.onclick = function() {
    inventoryModal.style.display = "block";
}

inventoryCloseBtn.onclick = function() {
    inventoryModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == inventoryModal) {
        inventoryModal.style.display = "none";
    }
}

const parentElement = document.getElementById('inventory-list');

const inventoryItemsHTML = inventory.map(item => `<h3>${item}</h3>`).join('')

parentElement.innerHTML = inventoryItemsHTML


// Encounter Modal
let encounterModal = document.getElementById("encounter-modal");
let encounterModalBtn = document.getElementById("encounter-btn");
let encounterCloseBtn = document.getElementsByClassName("encounter-close")[0];

encounterCloseBtn.onclick = function() {
    encounterModal.style.display = "none";
}

function randomEncounter1() {
    encounterModal.style.display = "block";
    const ranEncounterNum = Math.floor(Math.random() * 20) + 1
    if(ranEncounterNum === 1) {
        console.log('3 zombies')
    } else if (ranEncounterNum === 2) {
        console.log('2 zombies')
    } else if (ranEncounterNum === 3) {
        console.log('2 zombie dogs')
    } else if (ranEncounterNum === 4 || ranEncounterNum === 5) {
        console.log('zombie dog')
    } else if (ranEncounterNum === 6) {
        console.log('2 raiders')
    } else if (ranEncounterNum === 7) {
        console.log('1 raiders & 1 dog')
    } else if (ranEncounterNum === 8) {
        console.log('1 raider')
    } else if (ranEncounterNum === 9) {
        console.log('zombie bear')
    } else {
        console.log('1 zombie')
    }
}


function eatFood() {
    if (hunger >= 40 && food >= 1) {
        food -= 1
        hunger -= 40
    } else if (hunger <= 39 && hunger >= 1 && food >= 1) {
        food -= 1
        hunger = 0
    } else if ( food === 0) {
        text.innerText = "You are out of food."
    } else {
        text.innerText = "You are not hungry."
    }
    hungerText.innerText = hunger
    foodText.innerText = food
}

function goOutside() {
    randomEncounter1()
    settingImage.style.display = 'block';
    hunger += 1;
    hungerText.innerText = hunger
    button1.innerText = 'Explore the forest';
    button2.innerText = 'Farm';
    button3.innerText = 'Go inside';
    button1.onclick = goForest;
    button2.onclick = farm;
    button3.onclick = goInside;
    button4.style.display = "none";
    text.innerText = "After setting up a small farm, you quickly realize that it won't sustain you for long. You must venture into the forest to find more substantial sources of sustenance. The forest offers a variety of resources, such as edible plants, fruits, nuts, and mushrooms. You can also hunt for small game like rabbits or squirrels, and fish in nearby streams or lakes for protein. But beware, foraging and hunting can be risky, so be sure to exercise caution."
}

function radio() {
    hunger += 3;
    hungerText.innerText = hunger
    button1.innerText = 'Listen to Radio';
    button2.innerText = 'Rest';
    button3.innerText = 'Go outside';
    button1.onclick = radio;
    button2.onclick = rest;
    button3.onclick = goOutside;
    settingImage.style.display = 'block';
    settingImage.src = 'img/hamradio.jpg';
    text.innerText = "As you sit in your shelter, the only sound you can hear is the static crackling of the ham radio. You try to focus on the device in front of you, turning the dials and adjusting the antennae to try and pick up a signal. The radio is your lifeline to the outside world, your only source of news and information beyond the isolation of your shelter. \n\nBut as you tune the radio, all you can hear is the deafening white noise, a persistent buzz that permeates the airwaves. You try to adjust the frequency, hoping to pick up a signal, but it's no use. The only thing that comes through the speaker is a wall of static, a never-ending hum that drones on and on.\n\nYou feel a sense of frustration and desperation wash over you, knowing that every second that goes by without a signal could mean the difference between life and death. You wonder if anyone else is out there, listening, waiting for a sign of hope. But as the white noise continues to fill your ears, you realize that you are truly alone in this harsh, unforgiving world. \n\nDespite the bleakness of the situation, you continue to operate the ham radio, knowing that it's your best chance at finding other survivors and perhaps even a way to escape the horrors that surround you. You keep listening, hoping that someday the white noise will be replaced by a voice, a signal, a sign that there is still hope in this shattered world."
    // const ranNum3 = Math.floor(Math.random() * 40) + 1;
    const ranNum3 = 1
    console.log(ranNum3)
    if (ranNum3 === 1) {
        button4.style.display = "inline-block"
        button4.innerText = "Respond";
        button4.onclick = musicRespond
        text.innerText += "\n\nAs you sit in front of the ham radio, desperately scanning through the frequencies, hopelessness begins to set in. You've been at it for hours, but all you've heard so far is nothing but the monotonous white noise. Just as you're about to give up and switch it off, something strange happens. \n\nYou hear a faint and eerie old melody, barely audible through the white noise. It's so different from anything you've heard in a long time that you're not even sure if it's real or just your imagination. But as you adjust the frequency, the sound becomes clearer and you realize that it's indeed music, but not like any you've heard before. \n\nAs you listen to it for a while, the music slowly fades away into the static, leaving you with an uneasy feeling in the pit of your stomach. You can't shake the feeling that there's something sinister lurking beneath the surface, and the thought of it sends a chill down your spine."
    } else if (ranNum3 === 2) {
        button1.innerText = "Listen to Radio"
        button4.innerText = "Respond"
        button4.style.display = "inline-block"
        button1.onclick = helpListen
        button4.onclick = helpRespond
        text.innerText += "\n\nYou listen with increasing desperation, hoping against hope that something, anything, will break through the monotonous white noise. Just as you are about to give up all hope, your ears pick up on something - faint cries for help, buried deep in the muffled abyss of static. Your heart races with a mixture of relief and anxiety as you strain to make out the words amidst the crackling interference. You listen attentively, hoping to catch any clue as to the source of the distress call, while the cries for help grow louder and more urgent. Finally, the transmission fades back into the white noise, leaving you with a sense of urgency and a determination to respond to the call."
    }else if (ranNum3 === 3) {
        text.innerText += `\n\nAll of a sudden, the piercing sound of an emergency distress signal breaks through the static of the white noise, followed by a clear and authoritative automated message, "Attention! This is a test of the Emergency Broadcast System conducted by the United States government. This is only a test." The message echoes in your ears, and you're left wondering if there's any real hope left in this new world order.`
    } else if (ranNum3 === 4) {
        text.innerText += `\n\nEmerging from the white noise like a beacon of hope, a frantic voice calls out "Hello! Hello! Is anybody out there!?" The urgency in their voice sends shivers down your spine, and you can't help but feel a sense of responsibility to respond. \n\nAs the voice continues to call out, you can't help but feel torn. On one hand, your instinct is to help, but on the other, you can't shake the feeling that this could be a trap. After all, in this world, trust is a luxury that you can't afford to give out lightly. You take a deep breath and consider your options carefully, weighing the potential risks and rewards of responding. \n\nThe voice continues, now sounding more desperate than before, "Please, I beg of you! My wife is badly hurt, and we need help! Is there anybody out there who can hear me?" You can feel the intensity of the situation, and the weight of the decision you must make. Should you risk it and help, or should you stay hidden and avoid any potential danger? The uncertainty leaves you feeling torn, and you can feel your heart pounding in your chest as you try to decide what to do.`
    } else if (ranNum3 === 5) {
        text.innerText += "\n\nYou listen with increasing desperation, hoping against hope that something, anything, will break through the monotonous white noise. Just as you are about to give up all hope, your ears pick up on something - faint cries for help, buried deep in the muffled abyss of static. Your heart races with a mixture of relief and anxiety as you strain to make out the words amidst the crackling interference. You listen attentively, hoping to catch any clue as to the source of the distress call, while the cries for help grow louder and more urgent. Finally, the transmission fades back into the white noise, leaving you with a sense of urgency and a determination to respond to the call."
    } else if (ranNum3 === 6) {
        text.innerText += "\n\nAs the hours pass by, you continue to listen intently, hoping to hear any signs of life or communication. However, all you can hear is the steady hum of white noise, which starts to lull you into a drowsy state. Eventually, you drift off into an uneasy sleep. \n\nYou wake up to a sharp pang of hunger in your stomach, reminding you of your basic needs. You try to ignore it, but it persists and grows stronger, making it impossible to ignore. With a heavy heart, you realize that you need to find a way to feed yourself if you want to survive."
        hunger += 15 + Math.floor(Math.random() * 10) + 1
        hungerText.innerText = hunger
    } else if (ranNum3 === 7) {
        text.innerText += `\n\nAs you search through the frequencies, your ears catch an automated message that sends chills down your spine. It seems like a glimmer of hope in the midst of chaos. The message says, "Attention all survivors. The New City of Hope is offering sanctuary for all those seeking shelter. We are a community of a few thousand strong, and we have come together to rebuild society. If you join our community, we offer protection, food, and a chance to start anew." \n\nYou can feel the weight of the decision on your shoulders. Should you trust this message and try to find the New City of Hope? Or is it just another false hope, leading you into danger?`
    }else {
        text.innerText += "\n\nYou listen intently for what seems like hours, straining to pick up any sound that might offer a glimmer of hope. But as time drags on and the only thing you hear is the persistent hiss of white noise, your spirits begin to sink. A feeling of hopelessness washes over you as you start to accept the possibility that you might be completely alone in this desolate world."
    }
}

function musicRespond() {

}

function helpRespond() {

}

function helpListen() {

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
    let food = Math.floor(Math.random() * 5) + 1
    if (food === 1) {
        food += 1
        foodText.innerText = food
    } else if (food === 2) {
        food += 2
        foodText.innerText = food
    } else if (food === 3) {
        food += 3
        foodText.innerText = food
    } else if (food === 4) {
        food += 4
        foodText.innerText = food
    } else {
        food += 5
        foodText.innerText = food
    }
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
    text.innerText = "you start to walk home but everything kind of looks the same to you."
    const ranGoHome = Math.floor(Math.random() * 10) + 1
    if (ranGoHome === 1) {
        console.log('you are lost')
    } else if (ranGoHome === 2) {
        console.log('random encounter')
    } else if (ranGoHome === 3) {
        console.log('you find abandoned campsite')
        text.innerText += 'You find an abandoned campsite. There is trash scattred aroud everywhere. It seems like the campsite has been abandoned for a long time.'
        button1.innerText = 'Go home';
        button2.innerText = 'Search the forest';
        button3.innerText = 'Investigate campsite';
        button1.onclick = goHome;
        button2.onclick = goHomeForest;
        button3.onclick = searchCampsite;
    } else if (ranGoHome === 4) {
        console.log('you find a dead body.')
        text.innerText += 'You find a random dead body smei hidden among the unerbrush of the forest trying to find tour way home'
        button1.innerText = 'Go home';
        button2.innerText = 'Search the forest';
        button3.innerText = 'Investigate the corpse';
        button1.onclick = goHome;
        button2.onclick = goHomeForest;
        button3.onclick = searchCorpse;
    } else if (ranGoHome === 5) {
        console.log('you hear gun shots off in the distance.')
        text.innerText += 'You hear some gun shots shots off in the distance.' 
        button1.innerText = 'Go home';
        button2.innerText = 'Search the forest';
        button3.innerText = 'Investigate the sounds';
        button1.onclick = goHome;
        button2.onclick = goHomeForest;
        button3.onclick = searchGunShots;
    } else if (ranGoHome === 6) {
        console.log('you find a large pond')
        text.innerText += 'You find a large pand that seems like a good place where you might be abe to catch soem fish.'
        button1.innerText = 'Go home';
        button2.innerText = 'Search the forest';
        button3.innerText = 'Fish';
        button1.onclick = goHome;
        button2.onclick = goHomeForest;
        button3.onclick = fish;
    } else {
        console.log('You find your wat home')
        button1.innerText = 'Go into the forest';
        button2.innerText = 'Farm';
        button3.innerText = 'Go inside';
        button1.onclick = goForest;
        button2.onclick = farm;
        button3.onclick = goInside;
    }
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
    const ranNum20 = Math.floor(Math.random() * 20) + 1
    if (shotsFired && ranNum20 === 1 || ranNum20 === 8 || ranNum20 === 9 || ranNum20 === 10 || ranNum20 === 11 || ranNum20 === 12 || ranNum20 === 13) {
        console.log('random forest encounter')
    } else if (ranNum20 === 2) {
        food += 1
        text.innerText += "You find some mushrooms"
    } else if (ranNum20 === 3) {
        food += 2
        text.innerText += "You find some mushrooms"
    } else if (ranNum20 === 4) {
        food += 3
        text.innerText += "You find some mushrooms"
    } else if (ranNum20 === 5) {
        food += 1
        text.innerText += "You find some berries"
    } else if (ranNum20 === 6) {
        food += 2
        text.innerText += "You find some berries"
    } else if (ranNum20 === 7) {
        text.innerText += "You find an abandoned campsite"
        button4.innerText = "Search campsite"
        button4 = searchCampsite
    } else if (ranNum20 === 14) { 
        console.log('random encounter')
    }else {
        text.innerText += "You find nothing"
    }
    button1.innerText = 'Go into the forest';
    button2.innerText = 'Farm';
    button3.innerText = 'Go inside';
    button1.onclick = goForest;
    button2.onclick = farm;
    button3.onclick = goInside;
}

function fish() {
    const ranNum20 = Math.floor(Math.random() * 20) + 1
    if (ranNum20 === 1) {
        hunger += 5
        food += 1
        text.innerText += "You caught a small fish!"
        hungerText.innerText += hunger
        foodText.innerText += food
    } else if (ranNum20 === 2) {
        hunger += 5
        food += 2
        text.innerText += "You caught a large fish!"
        hungerText.innerText += hunger
        foodText.innerText += food
    } else if (ranNum20 === 3) {
        hunger += 5
        food += 2
        text.innerText += "You caught two small fish!"
        hungerText.innerText += hunger
        foodText.innerText += food
    } else if (ranNum20 === 4) {
        hunger += 5
        food += 3
        text.innerText += "You caught one small fish and one large fish!"
        hungerText.innerText += hunger
        foodText.innerText += food
    } else if (ranNum20 === 5) {
        hunger += 5
        food += 4
        text.innerText += "You caught two large fish!"
        hungerText.innerText += hunger
        foodText.innerText += food
    } else if (ranNum20 === 6) {
        hunger += 5
        console.log('zombie attack')
        hungerText.innerText += hunger
    } else if (ranNum20 === 7) {
        hunger += 5
        text.innerText += "Your fishing pole breaks"
        hungerText.innerText += hunger
    } else if (ranNum20 === 8) {
        hunger += 5
        console.log("zombie birds")
        hungerText.innerText += hunger
    } else if (ranNum20 === 9) {
        hunger += 5
        console.log('two zombies attack')
        hungerText.innerText += hunger
    }
    button1.innerText = 'Fish again';
    button2.innerText = 'Leave';
    button3.innerText = 'Forage';
    button1.onclick = fish;
    button2.onclick = goForest;
    button3.onclick = forage;
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

function searchCampsite() {

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


// function buyWeapon() {
//     if (gold >= 30) {
//         gold -= 30;
//         currentWeapon++;
//         goldText.innerText = gold;
//         let newWeapon = weapons[currentWeapoon].name;
//         text.innerText = "You now have a " + newWeapon + ".";
//         inventory.push(newWeapon);
//     }
// }