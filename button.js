//Ryan
var overview = "I'm Michael, a creative 4th-year bachelor's student of Automations and Computers Science.";
var strength = "\n\nWhat describes me the best is: the ability to communicate when working in my special area of knowledge, I am cautious in decision making and enjoy intellectual challenges.";
var weakness = "\n\nFor me it becomes difficult to relax, get bored and restless.\n\n";
var i = 0;
var button = document.getElementById('button');
var audio = new Audio();
var div;
var toggle = "speaker";

function writer()
{
    i += 1;
    if(i == 1)
    {
        text = overview;
        audio.src = "overview.mp3";
        audio.play();
        document.getElementById("button_content").innerHTML = "My strengths";
    }
    else if(i == 2)
    {
        text = strength;
        audio.src = "description.mp3";
        audio.play();
        document.getElementById("button_content").innerHTML = "My weakness";
    }
    else if(i == 3)
    {
        text = weakness;
        audio.src = "weakness.mp3";
        audio.play();
        document.getElementById("button_content").innerHTML = "My motivation";
    }
    else
    {
        if(i == 4)
        {
            audio.src = "text1.mp3";
            audio.play();
            button.innerText = '';
            div = document.getElementById("text1");
            div.style.visibility="visible";
            document.getElementById("button_content").innerHTML = "Best job";
        }
        else if(i == 5)
        {
            audio.src = "text2.mp3";
            audio.play();
            div = document.getElementById("text1");
            div.style.visibility="hidden";
            div = document.getElementById("text2");
            div.style.visibility="visible";
            document.getElementById("button_content").innerHTML = "THE END";
        }
    }
    if(i < 4)
    {
        button.innerText += text;
    }
    else if(i == 6)
    {
        i = 0;
        audio.pause();
        audio.currentTime = 0;
        div = document.getElementById("text2");
        div.style.visibility="hidden";
        document.getElementById("button_content").innerHTML = "Who I am";
    }
}

function change_sound()
{
    if(toggle == "speaker")
    {
        document.getElementById("speaker").src = "mute.png";
        toggle = "mute";
        audio.volume = 0;
    }
    else
    {
        document.getElementById("speaker").src = "speaker.png";
        toggle = "speaker";
        audio.volume = 1;
    }
}
