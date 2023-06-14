function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        // TODO: show end screen
        showEndScreen();
    } else {
        let question = questions[currentQuestion];

        document.getElementById('question-text').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];              	//um auf aktuelle frage zuzugreifen
    let selectedAnswerNumber = selection.slice(-1);             //um den letzten buchstaben der answer_ zu bekommen
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    if (selectedAnswerNumber == question['right_answer']) {    // abgleich mit der richtigen antwort, die auch nur eine zahl ist (daher slice-1)
        console.log('richtig!');
        document.getElementById(selection).parentNode.classList.add('right');
    } else {
        console.log('falsch!');
        document.getElementById(selection).parentNode.classList.add('wrong');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('right');
    }
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    currentQuestion++;                                      //zum bsp von 0 auf 1
    document.getElementById('next-btn').disabled = true;
    resetColors();
    showQuestion();
    calculateCurrentQuestionNumer(currentQuestion);
}

function resetColors() {
    document.getElementById('answer_1').parentNode.classList.remove('right');
    document.getElementById('answer_1').parentNode.classList.remove('wrong');
    document.getElementById('answer_2').parentNode.classList.remove('right');
    document.getElementById('answer_2').parentNode.classList.remove('wrong');
    document.getElementById('answer_3').parentNode.classList.remove('right');
    document.getElementById('answer_3').parentNode.classList.remove('wrong');
    document.getElementById('answer_4').parentNode.classList.remove('right');
    document.getElementById('answer_4').parentNode.classList.remove('wrong');
}

function calculateCurrentQuestionNumer(x) {
    let currentQuestion = x + 1;
    document.getElementById('position').innerHTML = /*css*/`
        ${currentQuestion}
    `
}

function showEndScreen() {
    document.getElementById('endscreen').style = '';
    document.getElementById('question-body').style = 'display: none';
    document.getElementById('riddle-picture').style = 'display: none';
}