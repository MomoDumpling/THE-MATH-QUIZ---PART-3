player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    
    qword = "<h4>"+ number1 + "X" + number2 + "</h4>";
    ibox_momo_dumplings = "<br> Answer : <input type = 'text' id = 'input_text_box'>";
    check_btn = "<br><br> <button onclick = 'check()' class = 'btn btn-info'> Check </button>";
    row =  qword + ibox_momo_dumplings + check_btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").innerHTML = "";
    document.getElementById("number2").innerHTML = "";
}
question_turn = "player1"
answer_turn = "player2"
function check(){
    get_answer = document.getElementById("input_text_box").value;
    if(get_answer == word){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = playe1_score;
    
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2"
        document.getElementById("player_question").innerHTML ="Question Turn - " + player2_name;
    }
    else{
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }
     if(answer_turn == "player1"){
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML ="Answer Turn - " + player2_name;
     }   
    else{
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML ="Answer Turn - " +  player1_name; 
    }
}