function playerAttack(damage){
    var elem = document.getElementById("comment");
    var enemy = document.getElementById("enemyName").innerHTML;
    elem.innerHTML = `
        Goku hit ${enemy} with ${damage} damage.
    `;
    enemyTakeDamage(damage);
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

function enemyDeath(name){
    console.log("Death is here");
    var elem = document.getElementById("comment");
    elem.innerHTML = `
        ${name} has been defeated!
    `;
    document.getElementById("enemyName").innerHTML = "kansas";
    getEnemy();
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
        <li> <button class="move2">Death Beam</button></li>
        <li> <button class="move23">Golden Death Beam</button> </li>
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