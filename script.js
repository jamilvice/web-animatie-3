/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

window.addEventListener('keydown', checkKeyPress, false);

function checkKeyPress(key) {
    if (key.keyCode == '65') {
        stick.style.animation = "rotation 3s ease infinite";
        text_up.style.animation = "rotation 3s ease infinite";
        text_down.style.animation = "rotation 3s ease infinite";
        wet.style.animation = "rotation 3s ease infinite";
        slime.style.animation = "rotation 3s ease infinite";
        ice_part.style.animation = "rotation 3s ease infinite";
        dropshadow.style.animation = "rotation 3s ease infinite";
        ice_full.style.animation = "rotation 3s ease infinite";
    }
}


window.addEventListener('keydown', checkKeyPress2, false);

function checkKeyPress2(key) {
    if (key.keyCode == '83') {
    stick.style.animation = "";
    text_up.style.animation = "";
    text_down.style.animation = "";
    wet.style.animation = "";
    slime.style.animation = "";
    ice_part.style.animation = "";
    dropshadow.style.animation = "";
    ice_full.style.animation = "";
    }
}



var a;

function show_hide() {
    if (a == 1) {
        document.getElementById('ice_full').style.display = 'inline';
        return a = 0;
    } else {
        document.getElementById('ice_full').style.display = 'none';
        return a = 1;
    }
}


var color = ['#00cc75', '#FA8072', '#E9967A', '#FFA07A', '#F08080'];
var i = 0;
document.querySelector('#kleurknop').addEventListener('click', function () {
    i = i < color.length ? ++i : 0;
    document.querySelector('body').style.background = color[i]
})





startbtn.addEventListener("click", function () {
    ice_part.style.animation = "ice_part 1.5s ease-in-out infinite alternate";
});

ice_part.addEventListener("click", function () {
    ice_part.style.animation = "ice_part 1.5s ease-in-out infinite alternate";
});

stopbtn.addEventListener("click", function () {
    ice_part.style.animation = "";
});


spinstart.addEventListener("click", function () {
    stick.style.animation = "rotation 3s ease infinite";
    text_up.style.animation = "rotation 3s ease infinite";
    text_down.style.animation = "rotation 3s ease infinite";
    wet.style.animation = "rotation 3s ease infinite";
    slime.style.animation = "rotation 3s ease infinite";
    ice_part.style.animation = "rotation 3s ease infinite";
    dropshadow.style.animation = "rotation 3s ease infinite";
    ice_full.style.animation = "rotation 3s ease infinite";
});

spinstop.addEventListener("click", function () {
    stick.style.animation = "";
    text_up.style.animation = "";
    text_down.style.animation = "";
    wet.style.animation = "";
    slime.style.animation = "";
    ice_part.style.animation = "";
    dropshadow.style.animation = "";
    ice_full.style.animation = "";

});
