var menu = "open";
var moveLeft = 0;
var moveTop = 0;
var titleInput = document.getElementById("inputtitle");
var descriptionInput = document.getElementById("inputdescription");
var title = document.getElementById("title");
var description = document.getElementById("description");


/*---------------------Open Menu Control with button-------------------*/
document.getElementById("openMenu").addEventListener("click", function () {
    if (menu == "closed") {
        document.getElementById("menuControl").style.bottom = "0px";
        menu = "open";
    } else if (menu == "open") {
        document.getElementById("menuControl").style.bottom = "-200px";
        menu = "closed";
    }
});

/*--------------------Move Background Img------------------------------*/
function moveBackground(direction) {
    if (direction == "left") {
        document.getElementById("backgroundDiv").style.backgroundPositionX = moveLeft + "px";
    }
    if (direction == "top") {
        document.getElementById("backgroundDiv").style.backgroundPositionY = moveTop + "px";
    }
};

document.addEventListener("keydown", function (ev) {
    if (ev.keyCode == 37) {
        moveLeft -= 10;
        moveBackground("left")
    }
    if (ev.keyCode == 38) {
        moveTop -= 10;
        moveBackground("top")
    }
    if (ev.keyCode == 39) {
        moveLeft += 10;
        moveBackground("left")
    }
    if (ev.keyCode == 40) {
        moveTop += 10;
        moveBackground("top")
    }
});

/*---------------------Title & Description----------------------------*/
document.getElementById("inputtitle").addEventListener("keyup", function (ev) {
    if (ev.keyCode == 13) {
        document.getElementById("title").innerHTML = document.getElementById("inputtitle").value;
    }
});

document.getElementById("inputdescription").addEventListener("keyup", function (ev) {
    if (ev.keyCode == 13) {
        document.getElementById("description").innerHTML = document.getElementById("inputdescription").value;
    }
});

/*---------------------Color Change-----------------------------------*/
document.getElementById("changeColor").addEventListener("change", function (ev) {
    title.style.color = document.getElementById("changeColor").value;
});

document.getElementById("changeColor").addEventListener("change", function (ev) {
    description.style.color = document.getElementById("changeColor").value;
});

/*--------------------Change Background Images------------------------*/
function changeBackground(num) {
    document.getElementById("backgroundDiv").style.backgroundImage = 'url("img/bg' + num + '.jpg")';
}

document.getElementById("inputbackground").addEventListener("keyup", function (ev) {
    inputbackground = document.getElementById("inputbackground").value;
    if (ev.keyCode == 13) {
        if (inputbackground == "horse") {
            changeBackground(1);
        } else if (inputbackground == "night") {
            changeBackground(2);
        } else if (inputbackground == "mountain") {
            changeBackground(3);
        } else if (inputbackground.indexOf("epic") != -1) {
            changeBackground(4);
        } else {
            urlBackground(inputbackground);
        }
    }
});
