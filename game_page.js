var player1_name=localStorage.getItem("player1 name");
var player2_name=localStorage.getItem("player2 name");
var player1_score=0;
var player2_score=0;
var question_turn="player 1";
var answer_turn="player 2";
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score ;
document.getElementById("player2_score").innerHTML=player2_score ;

document.getElementById("player_question").innerHTML="question turn-"+player1_name;
document.getElementById("player_answer").innerHTML="answer turn-"+player2_name;

function send(){
    var get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lower case="+ word);

    charat1=word.charAt(1);
    console.log(charat1);

    length_divide_2=Math.floor(word.length/2);
    charat2=word.charAt(length_divide_2);
    console.log(charat2);

length_minus_1=word.length-1;
charat3=word.charAt(length_minus_1);
console.log(charat3);

remove_charat1=word.replace(charat1,"_");
remove_charat2=remove_charat1.replace(charat2,"_");
remove_charat3=remove_charat2.replace(charat3,"_");
console.log(remove_charat3);

question_word="<h4 id='word_display'> Q."+remove_charat3+"</h4>";
input_box="<br> Answer: <input type='text' id='input_check_box'>";
check_button="<br><br> <button class='btn btn-info'onclick='check()'>Check</button>";
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";


    }

    function check(){
        get_answer=document.getElementById("input_check_box").value;
        answer=get_answer.toLowerCase();
        console.log("answer in lower case= "+answer);
        if(answer==word){
            if(answer_turn=="player 1"){
                player1_score=player1_score+1;
                document.getElementById("player1_score").innerHTML=player1_score;
            }
            else{
                player2_score=player2_score+1;
                document.getElementById("player2_score").innerHTML=player2_score;
            }
        }

        if(question_turn=="player 1"){
            question_turn="player 2";
            document.getElementById("player_question").innerHTML="question turn= "+player2_name;
        }
        else{
            question_turn="player 1";
            document.getElementById("player_question").innerHTML="question turn= "+player1_name;

        }
        if(answer_turn=="player 1"){
            answer_turn="player 2";
            document.getElementById("player_answer").innerHTML="answer turn= "+player2_name;
        }
        else{
            answer_turn="player 1";
            document.getElementById("player_answer").innerHTML="answer turn= "+player1_name;
        }
        document.getElementById("output").innerHTML="";
    }