function playerAttack(damage){
    if(damage ==10){
        var aud = new Audio("Kameha.mp3");
        aud.play();
    }
    var elem = document.getElementById("comment");
    var enemy = document.getElementById("enemyName").innerHTML;
    elem.innerHTML = `
        Goku hit ${enemy} with ${damage} damage.
    `;
    if(damage ==5 && enemy == "Cell"){
        console.log("alskdf");
        var audio = new Audio("Cell_True.mp3");
        audio.play();
    }

    enemyTakeDamage(damage);
}
function enemyAttack(damage){
    var elem = document.getElementById("comment");
    var enemy = document.getElementById("enemyName").innerHTML;
    elem.innerHTML = `
        Goku  was hit  by ${enemy} for ${damage} damage.
    `;
    if(enemy == "Frieza"){
        console.log("frieza attacking");
        var audi = new Audio("Frieza_Power.mp3");
        // can have different audio for different moves if not so lazy
        if(damage == 8){
            audi.play();
        }
        if(damage == 12){
            audi.play();
        }
    }
    if(enemy == "Cell"){
        console.log("cell attacking");
        var audi = new Audio("Cell_attack.mp3");
        if(damage == 3){
            audi.play();
        }
        if(damage == 7){
            audi.play();
        }
    }
    playerTakeDamage(damage);
}

function enemyTakeDamage(power){
    
    var health = document.getElementById("enemyHealth").innerHTML;
    if(health <= 0){
        var name = document.getElementById("enemyName").innerHTML;
        enemyDeath(name);
        return;
    }
    health -= power;
    document.getElementById("enemyHealth").innerHTML = health;
    if(health<=50){
        var maybe = document.getElementById("enemyspot2");
        if(maybe){
            maybe.id = "enemyspot3";
        }
        var possible = document.getElementById("enemyspot4");
        if(possible){
            possible.id = "enemyspot3";
        }
    }else{
        var maybe = document.getElementById("enemyspot3");
        if(maybe){
            maybe.id = "enemyspot2";
        }
    }
    
}
function playerTakeDamage(power){
    console.log(`player hit by ${power} power`);
    var health = document.getElementById("playerHealth").innerHTML;
    if(health <= 0){
        var name = document.getElementById("playerName").innerHTML;
        playerDeath(name);
        return;
    }
    health -= power;
    document.getElementById("playerHealth").innerHTML = health;
    if(power == 7){
        console.log("Must be cell absorbtion");
        absorb();
    }
    if(health <=50){
        console.log("Player weak");
        var maybe = document.getElementById("playerspot2");
        if (maybe){
            maybe.id= "playerspot3";
        }
    }
}

function enemyDeath(name){
    console.log("Death is here");
    var elem = document.getElementById("comment");
    elem.innerHTML = `
        ${name} has been defeated!
    `;
    document.getElementById("enemyName").innerHTML = "kansas";
    getEnemy();
}
function playerDeath(name){
    console.log("Death is here for player");
    var elem = document.getElementById("comment");
    elem.innerHTML = `
        ${name} has been defeated!
    `;
    document.getElementById("enemyName").innerHTML = "kansas";
    getPlayer();
}

function getEnemy(){
    console.log("finding a new enemy");
    var enemy = document.getElementById("enemy");
    if(enemy){
        console.log(enemy.id);
        enemy.id = "frieza";
    }else{
        console.log("bring back cell");
        location.reload();
    }
    var elem = document.getElementById("comment");
    elem.innerHTML = `
        Frieza has joined the battle!
    `;
    document.getElementById("enemyHealth").innerHTML = 110;
    var name = document.getElementById("enemyName").innerHTML;
    console.log(`name is ${name}`);
    document.getElementById("enemyName").innerHTML = "Frieza";
    var name = document.getElementById("enemyName").innerHTML;
    console.log(`name is ${name} now`);
    document.getElementById("enemyMoveset2").innerHTML = `
        <ul><span id="enemyName">Cell</span></ul>
        <li> <button class="move2" onclick = "enemyAttack(8)">Death Beam</button></li>
        <li> <button class="move23" onclick = "enemyAttack(12)">Golden Death Beam</button> </li>
    `;
    var maybe = document.getElementById("enemyspot3");
    if(maybe){
        maybe.id= "enemyspot4";
    }
    fix();
}
function fix(){
    document.getElementById("enemyName").innerHTML = "Frieza";
}
function goku(){
    // play audio
    console.log("playing noise");
    var audio = new Audio('Goku.mp3');
    audio.play();
}
function enemy(){
    console.log("enemy clicked");
}

function getPlayer(){
    console.log("finding a new player");
    location.reload();
    //tbd
}
function fix(){
    document.getElementById("enemyName").innerHTML = "Frieza";
}
function goku(){
    // play audio
    console.log("playing noise");
    var audio = new Audio('Goku.mp3');
    audio.play();
}
function enemy(){
    console.log("enemy clicked");
    var audio = new Audio('Cell_Quip.mp3');
    var audio2 = new Audio('Frieza.mp3');
    var enemy = document.getElementById("enemyName").innerHTML;
    if(enemy == "Frieza"){
        console.log("this is frieza not cell");
        audio2.play();
    }else{
        audio.play();
    }
}

function absorb(){
    console.log("absorbing");
    var cell = document.getElementById("enemyHealth").innerHTML;
    cell = parseInt(cell);
    cell += 5;
    // convert cell from string to int
    document.getElementById("enemyHealth").innerHTML = cell;
}