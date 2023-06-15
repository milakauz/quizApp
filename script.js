function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {

    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function answer(selection) {
    let question = questions[currentQuestion];              	//um auf aktuelle frage zuzugreifen
    let selectedAnswerNumber = selection.slice(-1);             //um den letzten buchstaben der answer_ zu bekommen
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedAnswerNumber == question['right_answer']) {    // abgleich mit der richtigen antwort, die auch nur eine zahl ist (daher slice-1)
        document.getElementById(selection).parentNode.classList.add('right');
        AUDIO_SUCCESS.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('wrong');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('right');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    currentQuestion++;                                      //zum bsp von 0 auf 1
    document.getElementById('next-btn').disabled = true;
    resetColors();
    showQuestion();
}

function updateProgressBar() {
    let percent = currentQuestion / questions.length;
    percent = Math.round(percent * 100);

    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
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

function updateToNextQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('position').innerHTML = currentQuestion + 1;
    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function showEndScreen() {
    document.getElementById('endscreen').style = '';
    styleEndscreenPicture();
    document.getElementById('question-body').style = 'display: none';
    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    document.getElementById('progress-bar').innerHTML = `100 % `;
    document.getElementById('progress-bar').style.width = `100%`;
}

function resetGame() {
    let headerPicture = document.getElementById('header-picture');
    headerPicture.src = './img/quizimage.jpg';
    headerPicture.classList.remove('endscreen-picture');
    resetContainerSize();
    document.getElementById('endscreen').style = 'display: none';
    document.getElementById('question-body').style = '';
    currentQuestion = 0; // wert auf 0 setzen
    rightQuestions = 0;
    init();
}

function styleEndscreenPicture() {
    let container = document.querySelector('.card.quiz-card');
    document.getElementById('header-picture').src = './img/brain result.png';
    let pic = container.querySelector('img');

    pic.classList.add('endscreen-picture');

    // container.style.width = container.offsetWidth + 'px';  // setzt container auf ursprüngliche größe
    // container.style.height = container.offsetHeight + 'px';
}

function resetContainerSize() {
    let container = document.querySelector('.card.quiz-card');
    container.style.width = '';
    container.style.height = '';
}