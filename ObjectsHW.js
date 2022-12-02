let party = [    {
    name1: 'Joline',
    hitpoints: 15,
    belongings: ["spear", "bread", "Tums"],
    companion: {
        name: "Tabby",
        type: "cat",
    }
},
{
    name2: 'Timothy',
    hitpoints: 10,
    belongings: ["sword", "potion", "Tums"],
    companion: {
        name: "Velma",
        type: "Bat",
    }
},
{
    name3: 'Sarah',
    hitpoints: 20,
    belongings: ["bow", "arrows", "wood"],
    companion: {
        name: "Tony",
        type: "tiger",
    }
},]

// Prompt 6, 7, 8,  and 11 should be functions (

// Prompt 1: double the hitpoints of everyone in the party
party.forEach ((el) => {
    el.hitpoints = el.hitpoints *2;
})


// Prompt 2: Timothy has been hit with an arrow, subtract 5 points from his hp
const losePoints = (name, hitpoints) => {
party.forEach((el) => {
    if(name == el.name) {
        el.hitpoints - hitpoints;
    }
})
}

// Prompt 3: Sarah's tiger has been turned into a jellyfish by a wizard, please change it
const changeAnimal = (name) => {
party.forEach((el) => {
    if(name == el.name) {
        el.companion.type = ("jellyfish");
    }
})
}


// Prompt 4: Timothy drank this potion. Raise his hitpoints by 20 and remove "potion" from his belongings.
const drankPotion = (name) => {
party.forEach((el) => {
    if (name == el.name) {
        el.hitpoints = el.hitpoints + 20;
        const index = el.belongings.indexOf('potion');
        el.belongings.splice(index,1);
    }
})
}

// Prompt 5: Timothy got hungry and stole Joline's bread. Take it out of her belongings and put it  into Timothy's belongings.
const stoleBread = (name, name1) => {
party.forEach((el) => {
    if (name == el.name) {
        const index = el.belongings.indexOf("bread");
        el.belongings.splice(index,1);
    }
    else if(name1 == el.name) {
        el.belongings.push("bread");
    }
})
}

// Prompt 6: Joline got upset and left the party. Take her out of the array. (use the name of the leaving member as a parameter)
const eliminateJoline = (leavingMember) => {
party.forEach((el) => {
    if(leavingMember == el.name) {
        const remove = el.splice[0];
    }
})
}
// Prompt 7: Timothy and Sarah have been recruiting. Add a new adventurer to the party. (new adventurer is parameter)
const addMember = (newAdventurer) => {
party.push(newAdventurer);
}

addMember({name: "Naila", hitpoints: 17, belongings: ["dagger", "matches", "seeds"], companion:["Mushu", "Dragon"]});
// Prompt 8: The party has been doing well! They found 200 gold. Create a new property called gold and split the gold evenly between everyone. (amount of gold is parameter)
const addGold = (amountOfGold) => {
party.forEach((el) => {
    el.gold = Math.floor(amountOfGold/party.length);
})
}
addGold (200);
// Prompt 9: Sarah is tired of taking care of a jellyfish. Subtract some gold from her and change her companion to a bear. 
const removeCompanion = (name) => {
party.forEach((el) => {
    if(name == el.name) {
        el.gold = el.gold - 20
        el.companion.type = "bear"
    }
})
}
removeCompanion("Sarah")
// Prompt 10: Timothy’s sword has gotten old. Change it to “Rusty Sword" 
const changeSwordName = (name) => {
party.forEach((el) => {
    if(name == el.name) {
        const index = el.belongings.indexOf("sword");
        el.belongings.splice(index,1);
        el.belongings.push("Rusty Sword");
    }
})
}
changeSwordName("Timothy");
// Prompt 11: Write a function called setLeader that takes a name as a parameter. The member with that name should have a new property leader: true while the other members have leader: false.
const setLeader = memberName => {
party.forEach((el) => {
    if (memberName == el.name) {
        el.leader = true;
    } else {
        el.leader = false;
    }
});
}

setLeader("Sarah");
console.log(party);