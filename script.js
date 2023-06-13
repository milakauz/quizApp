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
    let question = questions[currentQuestion];                  
    //um auf aktuelle frage zuzugreifen
    let selectedAnswerNumber = selection.slice(-1);             
    //um den letzten buchstaben der answer_ zu bekommen
    let selected = document.getElementById(selection);
    let x = question['right_answer'];
    // um index der richtigen antwort zu holem
    let rightAnswerSelector  = `#answer_${x}`;
    // um die id der richtigen antwort zu generiern
    let rightAnswerElement = document.querySelector(rightAnswerSelector);
    // greift auf das element mit der ID der richtigen antwort zu

    if (selectedAnswerNumber == question['right_answer']) {     // abgleich mit der richtigen antwort, die auch nur eine zahl ist (daher slice-1)
        console.log('richtig!');
        selected.classList.add('right');
    } else {
        console.log('falsch!');
        selected.classList.add('wrong');
        rightAnswerElement.classList.add('right');
    }
}
