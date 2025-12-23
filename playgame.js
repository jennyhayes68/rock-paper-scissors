

let x = Math.floor(Math.random() * 3) +1;
let randomImage = "images/hand" + x + ".jpg";
document.querySelectorAll("img")[0].setAttribute("src", randomImage);


let y = Math.floor(Math.random() * 3) +1;
let randomImage2 = "images/hand" + y + ".jpg";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);



if(x == 1 && y == 2)
    {
    document.querySelectorAll("h1")[1].innerHTML = "Player 1 wins!";
}else if(x == 2 && y == 1)
    {
    document.querySelectorAll("h1")[1].innerHTML = "Player 2 wins!";
}else if(x == 3 && y == 1)
    {
    document.querySelectorAll("h1")[1].innerHTML = "Player 1 wins!";
}else if(x == 1 && y == 3)
    {
    document.querySelectorAll("h1")[1].innerHTML = "Player 2 wins!";
}else if(x == 2 && y == 3)
    {
    document.querySelectorAll("h1")[1].innerHTML = "Player 1 wins!";
}else if(x == 3 && y == 2)
    {
    document.querySelectorAll("h1")[1].innerHTML = "Player 2 wins!";
}else
{
    document.querySelectorAll("h1")[1].innerHTML = "It's a tie!";
}        