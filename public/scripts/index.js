var menuMoveCount = 0;

function menubtnclik()
{
    //menuMoveCount = 0;
    //var currWidth = document.getElementById("menu").clientWidth;
    //setInterval(function() {moveMenu(1,currWidth )}, 1);
    document.getElementById("menu").style.right = "0%";
    document.getElementById("btn_cnclmenu").style.transform = 'rotate(0deg)';
    document.getElementById("btn_cnclmenu").style.ebkitTransform = 'rotate(0deg)';
    document.getElementById("btn_cnclmenu").style.mozTransform = 'rotate(0deg)'
}

function cnclbtnclik()
{
    document.getElementById("btn_cnclmenu").style.transform = 'rotate(30deg)';
    document.getElementById("menu").style.right = "-35%";
    document.getElementById("btn_cnclmenu").style.webkitTransform = 'rotate(30deg)';
    document.getElementById("btn_cnclmenu").style.mozTransform = 'rotate(30deg)'

}