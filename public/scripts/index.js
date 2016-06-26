
var line = 2; //initial lines og Message textarea
var firstLine = true; //flag for current line is first line of textarea
var scrollFlag = true; //scroll was being called twice to stop it a flag used
var linHeight = 2;
function menubtnclik() {

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
    console.log(lastBreak);
    var currLine = content.substring(lastBreak + 1, content.length);

    //increasing size if enter pressed
    //console.log(content);
    if (keyCode == "13") {
        if (firstLine == false) {
            line++;
            document.getElementById("ta").style.height = (linHeight * line) + "em";
        }
        firstLine = false;

    }
    //decresing size     

    else if (currLine.length == 0 && line > 2) {
        line--;
        if (line == 2)
            firstLine = true;
        document.getElementById("ta").style.height = (linHeight * line) + "em";
    }
    var currLineWidth = (744 / 90) * currLine.length;
    console.log(currLine);
    // console.log(currLineWidth + ":    " + document.getElementById("ta").clientWidth);
    if (currLineWidth >= document.getElementById("ta").clientWidth) {
        var space = content.lastIndexOf(" ");
        content = content.substring(0, space + 1) + "\n" + content.substring(space + 1, content.length);
        document.getElementById("ta").value= content;
        firstLine = false;
    }

}

function scrollResize() {

    if (scrollFlag) {
        firstLine = false;
        line++;
        document.getElementById("ta").style.height = (linHeight * line) + "em";
    }
    scrollFlag = !scrollFlag;

}



