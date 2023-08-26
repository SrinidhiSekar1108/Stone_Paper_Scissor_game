var player1_name;
var player2_name;

function name_change()
{
    var name1=document.getElementById("player1");
    var name2=document.getElementById("player2");
    var button=document.getElementById("submit");
    button.addEventListener('click',function(){
        player1_name=name1.value;
        player2_name=name2.value;
        if(player1_name=="")
        {
            player1_name="Player1"
        }
        if(player2_name=="")
        {
            player2_name="Player2"
        }
        document.getElementById("p1").innerHTML=player1_name;
        document.getElementById("p2").innerHTML=player2_name;
    });
}

function play()
{
    var randomNumber1=Math.floor(Math.random()*3)+1;
    var pic1;
    if(randomNumber1==1)
    {
        pic1="paper1.jpeg";
    }
    else if(randomNumber1==2)
    {
        pic1="scissir1.jpeg";
    }
    else{
        pic1="stone1.jpg";
    }
    //alert(pic1);
    document.querySelectorAll("img")[0].setAttribute("src",pic1);

    var randomNumber2=Math.floor(Math.random()*3)+1;
    var pic2;
    if(randomNumber2==1)
    {
        pic2="paper2.jpg";
    }
    else if(randomNumber2==2)
    {
        pic2="scissor2.jpg";
    }
    else{
        pic2="stone2.jpg";
    }
    //alert(pic2);
    document.querySelectorAll("img")[1].setAttribute("src",pic2);


    if(randomNumber1==1 && randomNumber2==2)
    {
        document.querySelector("#refresh").innerHTML=player2_name+" Wins!!!";
    }
    else if(randomNumber1==1 && randomNumber2==3)
    {
        document.getElementById("refresh").innerHTML=player1_name+" Wins!!!";
    }
    else if(randomNumber1==2 && randomNumber2==1)
    {
        document.getElementById("refresh").innerHTML=player1_name+" Wins!!!";
    }
    else if(randomNumber1==2 && randomNumber2==3)
    {
        document.getElementById("refresh").innerHTML=player2_name+" Wins!!!";
    }
    else if(randomNumber1==3 && randomNumber2==1)
    {
        document.getElementById("refresh").innerHTML=player2_name+" Wins!!!";
    }
    else if(randomNumber1==3 && randomNumber2==2)
    {
        document.getElementById("refresh").innerHTML=player1_name+" Wins!!!";
    }
    else
    {
        document.getElementById("refresh").innerHTML="Match Draw!!!";
    }
}
