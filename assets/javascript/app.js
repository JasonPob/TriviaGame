//variables
var clockRunning = false;
var time = 31;
var intervalId;
var correctAnswers = 0;
var inncorrectAnswers = 0;
var unanswered = 0;
var questions = new Array(10);


//selecting the right values
// $(".answer").on("click", function () {
//     if ($(this).val() === "Correct") {
      
//         console.log(correctAnswers);
//     }
//     if ($(this).val() === "Incorrect") {
        
//         console.log(inncorrectAnswers);
//     }
// })

$(".answer").on("click", function () {
    console.log("name value of question: " + this.attributes["name"].value);
    var questionNum = (this.attributes["name"].value);
    parseInt(questionNum);
    console.log("questionNum: " + questionNum);
    questions[questionNum-1] = $(this).val();
    console.log("questions" + questions);
})
//timer

window.onload = function () {
    setTimeout(start, 0);
}

function start() {
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
}


function count() {
    time--;
    if (time <= 0) {
for (var i = 0; i < questions.length; i++){
    if (questions[i]=== "Correct"){
        correctAnswers++
    }
    if (questions[i] === "Incorrect"){
        inncorrectAnswers++
    }
    else 
    unanswered++
}
        clearInterval(intervalId);
        $("#timer").html("Game Over!");
        $("#timer").append("<br> Results: ");
        $("#timer").append("<br> Correct Answers: " + correctAnswers );
        $("#timer").append("<br> Incorrect Answers: " + inncorrectAnswers );
        $("#timer").append("<br> Unanswered : " + unanswered );
    }
   else $("#timer").text("Time Remaining: " + time + " Seconds");

}

