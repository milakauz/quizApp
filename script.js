function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    if (isAnswerSelected) {    //wenn eine antwort schon gewhlt wurde, finden keine weiteren verfrbungen mehr statt
        return;
    }

    let question = questions[currentQuestion];              	//um auf aktuelle frage zuzugreifen
    let selectedAnswerNumber = selection.slice(-1);             //um den letzten buchstaben der answer_ zu bekommen
    let index = question['right_answer'];
    let rightAnswerSelector = `#answer_${index}`;
    let rightAnswerElement = document.querySelector(rightAnswerSelector);

    if (selectedAnswerNumber == question['right_answer']) {     // abgleich mit der richtigen antwort, die auch nur eine zahl ist (daher slice-1)
        console.log('richtig!');
        document.getElementById(selection).parentNode.classList.add('right');
    } else {
        console.log('falsch!');
        document.getElementById(selection).parentNode.classList.add('wrong');
        rightAnswerElement.classList.add('right');
    }

    isAnswerSelected = true;
}