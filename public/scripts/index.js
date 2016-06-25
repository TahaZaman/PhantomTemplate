
var line = 2;
var firstLine = true;
var scrollFlag = true;
var linHeight = 2;
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
    var currLine = content.substring(lastBreak + 1, content.length);
    
    //increasing size if enter pressed
    console.log(firstLine);
    if (keyCode == "13") {
        if (firstLine == false) {
            line++;
            document.getElementById("ta").style.height = (linHeight * line) + "em";
        }
        firstLine = false;

    }
    //decresing size     
    
    else if ( currLine.length == 0 && line > 2) {
        line--;
        if (line == 2)
            firstLine = true;
        document.getElementById("ta").style.height = (linHeight * line) + "em";
    }
}

function scrollResize() {
    if (scrollFlag) {
        line++;
        document.getElementById("ta").style.height = (linHeight * line) + "em";
    }
    scrollFlag = !scrollFlag;

}



