var overview = "I'm Mihai, a creative 4th-year bachelor's student of Automations and Computers Science.";
var strength = "\n\nWhat describes me the best is: the ability to communicate when working in my special area of knowledge, I am cautious in decision making and enjoy intellectual challenges.";
var weakness = "\n\nFor me it becomes difficult to relax, get bored and restless.\n\n";
var i = 1;
var button = document.getElementById('button');
var audio = new Audio();

function writer()
{
    if(i == 1)
    {
        text = overview;
        audio.src = "overview.mp3";
        audio.play();
    }
    else if(i == 2)
    {
        text = strength;
        audio.src = "description.mp3";
        audio.play();
    }
    else if(i == 3)
    {
        text = weakness;
        audio.src = "weakness.mp3";
        audio.play();
    }
    if(i < 4)
    {
        button.innerText += text;
        i += 1;
    }
    else
    {
        button.innerText = '';
    }
}
