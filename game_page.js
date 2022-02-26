player1 = localStorage.getItem("player1_name");
player2 = localStorage.getItem("player2_name");
player1score = 0;
player2score = 0;
document.getElementById("player1_name").innerHTML = player1 + " : ";
document.getElementById("player2_name").innerHTML = player2 + " : ";
document.getElementById("player1_score").innerHTML = player1score;
document.getElementById("player2_score").innerHTML = player2score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player1;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2;


function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowercase-" + word);
    charAt1 = word.charAt(1);
    console.log(charAt1);
    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    length_divide_2 = Math.floor(word.length / 2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);
    console.log(charAt3);

   
    question_word = "<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
question_turn = "player1";
answer_turn = "player2";


