let clickPoints = 0 + localStorage.getItem("cookie_clickPoints");
let counter = + localStorage.getItem("cookie_clicks");
let upgrade_1 = + localStorage.getItem("cookie_upgrade_1");
let upgrade_2 = + localStorage.getItem("cookie_upgrade_2");

document.getElementById('button').onclick = () => {
    counter += clickPoints;
    update()
};

document.getElementById('upgrade_1').onclick = () => {
    if (counter >= upgrade_1) {
        counter -= upgrade_1
        clickPoints += 1
        upgrade_1 *= 1.2
        update()
    }

};
function update() {
    document.getElementById('upgrade_1').innerText = '+ 1 per click - ' + Math.round(upgrade_1);
    document.getElementById('score').innerText = Math.round(counter);
    save_data()
}

function save_data() {
    localStorage.setItem('cookie_clickPoints', clickPoints)
    localStorage.setItem('cookie_clicks', counter)
    localStorage.setItem('cookie_upgrade_1', upgrade_1)
    localStorage.setItem('cookie_upgrade_2', upgrade_2)
}

update()