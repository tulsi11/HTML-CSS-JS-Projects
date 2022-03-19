const quizData = [
    {
        question: 'Q1. Who invented C++?',
        a: 'Dennis Ritchie',
        b: 'Ken Thompson',
        c: 'Brian Kernighan',
        d: 'Bjarne Stroustrup',
        ans: 'ans1'
    },
    {
        question: 'Q2. What is C++?',
        a: 'C++ is an object oriented programming language',
        b: 'C++ is a procedural programming language',
        c: 'C++ supports both procedural and object oriented programming language',
        d: ' C++ is a functional programming language',
        ans: 'ans3' 
    },
    {
        question: 'Q3. Which of the following is the correct syntax of including a user defined header files in C++?',
        a: '#include [userdefined]',
        b: '#include "userdefined"',
        c: '#include <userdefined.h>',
        d: '#include <userdefined>',
        ans: 'ans4' 
    },
    {
        question: 'Q4. Which of the following is used for comments in C++?',
        a: '/* comment */',
        b: '// comment */',
        c: '// comment',
        d: 'both // comment or /* comment */',
        ans: 'ans4' 
    },
    {
        question: 'Q5. Which of the following user-defined header file extension used in c++?',
        a: 'hg',
        b: 'cpp',
        c: 'h',
        d: 'py',
        ans: 'ans2' 
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () =>{
    const questionList = quizData[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();
const getCheckAnswer = () => {
    let answer;
    answers.forEach((currAnsEle) => {
        if(currAnsEle.checked){
            answer = currAnsEle.id;
        }
    });

    return answer;
}

const deselectAll = () => {
    answers.forEach((currAnsEle) => currAnsEle.checked = false );
} 

submit.addEventListener('click', () =>{
    const checkedAnswer  = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizData[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll()

    if(questionCount < quizData.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
            <h3> You Scored ${score}/${quizData.length} ✌ </h3>
            <button class="btn" onclick="location.reload()">PLAY AGAIN ! </button>
        
        `;

        showScore.classList.remove('scoreArea');
    }
});
