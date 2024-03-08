if (localStorage.getItem("cookie_clicks")) {
    var clickPoints = + localStorage.getItem("cookie_clickPoints");
    var counter = + localStorage.getItem("cookie_clicks");
    var upgrade_1 = + localStorage.getItem("cookie_upgrade_1");
    var upgrade_2 = + localStorage.getItem("cookie_upgrade_2");
    var autoClickerInterval = + localStorage.getItem("cookie_autoClickerInterval")
}

else {
    var clickPoints = 1
    var counter = 0
    var upgrade_1 = 10
    var upgrade_2 = 100
    var autoClickerInterval = 0
}

document.getElementById('button').onclick = () => {
    counter += clickPoints;
};

document.getElementById('upgrade_1').onclick = () => {
    if (counter >= upgrade_1) {
        counter -= upgrade_1
        clickPoints += 1
        upgrade_1 *= 1.2
    }

};

document.getElementById('upgrade_2').onclick = () => {
    if (counter >= upgrade_2) {
        counter -= upgrade_2;
        upgrade_2 *= 1.2;
        autoClickerInterval += 1;
    }
};

function update() {
    document.getElementById('upgrade_1').innerText = '+ $1 per click - Cost: $' + Math.round(upgrade_1);
    document.getElementById('upgrade_2').innerText = '+$1 per second - Cost: $' + Math.round(upgrade_2);
    document.getElementById('score').innerText = '$' + Math.round(counter);
    if (counter >= upgrade_1) {
        document.getElementById('upgrade_1').style.borderColor = 'green';
    }
    else{
        document.getElementById('upgrade_1').style.borderColor = 'red';
    }

    if (counter >= upgrade_2) {
        document.getElementById('upgrade_2').style.borderColor = 'green';
    }
    else{
        document.getElementById('upgrade_2').style.borderColor = 'red';
    }
    save_data();
}

function save_data() {
    localStorage.setItem('cookie_clickPoints', clickPoints)
    localStorage.setItem('cookie_clicks', counter)
    localStorage.setItem('cookie_upgrade_1', upgrade_1)
    localStorage.setItem('cookie_upgrade_2', upgrade_2)
    localStorage.setItem('cookie_autoClickerInterval', autoClickerInterval)
}

function tick() {
    counter += autoClickerInterval /10
    update()
}

document.getElementById("restartButton").onclick = () => {
    localStorage.clear();
    location.reload();
}

setInterval(tick, 100);

update()
