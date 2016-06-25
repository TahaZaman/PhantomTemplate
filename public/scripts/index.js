
var line = 2;
function menubtnclik() {
    //menuMoveCount = 0;
    //var currWidth = document.getElementById("menu").clientWidth;
    //setInterval(function() {moveMenu(1,currWidth )}, 1);
    document.getElementById("menu").style.right = "0%";
    document.getElementById("btn_cnclmenu").style.transform = 'rotate(0deg)';
    document.getElementById("btn_cnclmenu").style.webkitTransform = 'rotate(0deg)';
    document.getElementById("btn_cnclmenu").style.mozTransform = 'rotate(0deg)'
}

function cnclbtnclik() {
    document.getElementById("btn_cnclmenu").style.transform = 'rotate(30deg)';
    document.getElementById("menu").style.right = "-35%";
    document.getElementById("btn_cnclmenu").style.webkitTransform = 'rotate(30deg)';
    document.getElementById("btn_cnclmenu").style.mozTransform = 'rotate(30deg)'
}

function resize(event) {
    var keyCode = event.keyCode;
    var content = document.getElementById("ta").value;
    var lastBreak = content.lastIndexOf('\n');
    var start = 0;
    var currLine = content.substring(lastBreak + 1, content.length);
    console.log(currLine.length);
    if (keyCode == 8 && currLine.length == 0 && line > 2) {
        line--;
        document.getElementById("ta").style.height = (1.5 * line) + "em";
    }
    if (keyCode == "13" || (currLine.length % 99 == 0 && currLine.length / 99 != 1  && currLine.length != 0)) {
        line++;
        document.getElementById("ta").style.height = (1.5 * line) + "em";
    }
}



