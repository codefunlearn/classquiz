/* array of student objects */
var classFellowsArray = [
    {
        name: "Amanda Olsson",
        image: 'assets/amanda-olsson.jpg'
    },
    {
        name: 'August Ronnie',
        image: 'assets/august-ronnle.jpg'

    },

    {
        name: 'Axel Börnfot',
        image: 'assets/axel-bjornfot.jpg'
    },

    {
        name: 'Cedrik von Heiroth',
        image: 'assets/cedrik-von-heiroth.jpg',
    },

    {
        name: 'Celil Tat',
        image: 'assets/celil-tat.jpg'
    },

    {
        name: 'Christina Mannerberg',
        image: 'assets/christina-mannerberg.jpg'
    },

    {
        name: 'Christopher Lindstrom',
        image: 'assets/christopher-lindstrom.jpg'
    },

    {
        name: 'Daniel Palmdal',
        image: 'assets/daniel-palmdal.jpg'
    },

    {
        name: 'Elena Myadzeleva',
        image: 'assets/elena-myadzeleva.jpg'
    },

    {
        name: 'Elin Stenquist',
        image: 'assets/elin-stenquist.jpg'
    },

    {
        name: 'Emma Andersson',
        image: 'assets/emma-andersson.jpg'
    },

    {
        name: 'Frida Stenberg',
        image: 'assets/frida-stenberg.jpg'
    },
    {
        name: 'Henrik Lööd',
        image: 'assets/henrik-lood.jpg'
    },

    {
        name: 'Hitomi Winberg',
        image: 'assets/hitomi-winberg.jpg'
    },

    {
        name: 'Isabella Bjelobrk',
        image: 'assets/Isabella-bjelobrk.jpg'
    },

    {
        name: 'Jerry Phuong',
        image: 'assets/jerry-phuong.jpg'
    },

    {
        name: 'Johan Markström',
        image: 'assets/johan-markstrom.jpg'
    },

    {
        name: 'Johannes Hernehult',
        image: 'assets/johannes-hernehult.jpg'
    },

    {
        name: 'Johnny Lay',
        image: 'assets/johnny-lay.jpg'
    },

    {
        name: 'Khaled Hassan',
        image: 'assets/khaled-hassan.jpg'
    },

    {
        name: 'Kyd Kitchaiya',
        image: 'assets/kyd-kitchaiya.jpg'
    },

    {
        name: 'Leo Eriksson',
        image: 'assets/leo-eriksson.jpg'
    },

    {
        name: 'Linda Hultemark',
        image: 'assets/linda-hultemark.jpeg'
    },

    {
        name: 'Lisa Hansson',
        image: 'assets/lisa-hansson.jpg'
    },

    {
        name: 'Lovisa Nordstrom',
        image: 'assets/lovisa-nordstrom.jpg'
    },

    {
        name: 'Marko Zdravkovski',
        image: 'assets/marko-zdravkovski.jpg'
    },

    {
        name: 'Mehmet Yazgan',
        image: 'assets/mehmet-yazgan.jpg'
    },

    {
        name: 'Mikaela Nörrelökke',
        image: 'assets/mikaela-norrelokke.jpg'
    },

    {
        name: 'Miranda Trang',
        image: 'assets/miranda-trang.jpg'
    },

    {
        name: 'Mona Khorasani',
        image: 'assets/mona-khorasani.jpg'
    },

    {
        name: 'Oliver Kellgren',
        image: 'assets/oliver.kellgren.jpeg'
    },

    {
        name: 'Oskar Anderberg',
        image: 'assets/oskar-anderberg.jpg',
    },

    {
        name: 'Pernilla Lundahl',
        image: 'assets/pernilla-lundahl.jpg'
    },

    {
        name: 'Pucha Sayerz-Olsen',
        image: 'assets/pucha-sayerz-olsen.jpg'
    },

    {
        name: 'Saga Swahn',
        image: 'assets/saga-swahn.jpg'
    },

    {
        name: 'Sara Mattisson',
        image: 'assets/sara-mattisson.jpg'
    },

    {
        name: 'Sebastian Mineur',
        image: 'assets/sebastian-mineur.jpg'
    },

    {
        name: 'Simon Bergstrand',
        image: 'assets/simon-bergstrand.jpg'
    },

    {
        name: 'Susanne Eneroth',
        image: 'assets/susanne_eneroth.jpeg'
    },

    {
        name: 'Svitlana Rybakova',
        image: 'assets/svitlana-rybakova.jpg'
    },

    {
        name: 'Tricia Hartmann',
        image: 'assets/tricia-hartmann.jpg'
    },

    {
        name: 'Zainab Ahmad',
        image: 'assets/zainab-ahmad.jpg'
    }
]
//---------------------------

//getting document elements 

const quizImg = document.querySelector('.quizbox-container img');
const quizBox = document.querySelector('.quizbox-container');
const quizGame = document.querySelector('.quiz-game');
const lightboxCaption = document.querySelector('#lightbox-wrapper .caption');
const newQuizSlide = document.querySelector('.start-button-container');
const totalScore = document.querySelector('.final-score');
const quizResult = document.querySelector('.result');
const playAgain = document.querySelector('.play-again');
const currentScore = document.querySelector('.running-score-container');
const showScorebtn = document.querySelector('.show-score-button');
let score = 0;
const quizFormContainer = document.querySelector('.quiz-form-container');
const quizForm = document.querySelector('.quiz-form');
const quizAnswers = document.querySelectorAll('.quiz-option-label');
const submitAnswerbtn = document.querySelector('.submit-answers-button');
const thumbsUp = document.querySelector('.running-score-container .alert-success');
const thumbsDown = document.querySelector('.running-score-container .alert-danger');
//photo gallery
const studentGallery = document.querySelector('.gallery');
const lightboxWrapper = document.querySelector('#lightbox-wrapper');
const lightboxImg = document.querySelector('#lightbox-wrapper img');
//Working copes of array
// let tempStudentArrayFullCopy = classFellowsArray.slice();
let tempStudentArray = classFellowsArray.slice();
//---------------------------
//FUNCTIONS
/* 
 todo now
 /* KOMPLETTERING
DONE  Samma elev kommer flera gånger per spelomgång. FILTER
DONE  Finns inget ”slut”, är bara enskilda gissningar. WRAP IN 'TEN QUESTIONS'
DONE Går inte automatiskt vidare till nästa gissning. 'TIMEOUT THEN RELOAD'
DONE Man kan klicka flera gånger på samma svar och få poäng. 'DISABLE BUTTONS AFTER ONE CLICK'
DONE Gamla svarsalternativet är fortfarande markerat när man går till nästa gissning. RESET FORM
*/

//FUNCTIONS
//generate a random number
let fnRandomizeNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};
//select ten random students from original array to use for quiz (FUNCTION NOT USED)
let fnPickTenStudents = function (givenArray){
    let rndStudent =0;
    let pickedStudentsArr = []
    // Looping ten times through full array to randomly splice an element and push it to our working array
    for(let i=0; i<givenArray.length-1; i++){
        rndStudent = fnRandomizeNumber(0, givenArray.length-1);
        pickedStudentsArr.push(givenArray.splice(rndStudent, rndStudent+1)[0]);  
    }
       return pickedStudentsArr;    
};

//select a random classfellow
let currentStudent = function (objectArray, funcRandomize) {
    rndStudentIndex = funcRandomize(0, objectArray.length - 1);
    return rndStudentIndex;
}
let rightOptionID; //declare variable to hold element ID of the correct option 


//button to present a new classfellow
let nextClassfellow = function (objectArray, studentIndex) {
    //update image 
    quizImg.setAttribute('src', objectArray[studentIndex].image);
    //update the quiz options randomly
    let tempAnswer;
   let tempIndices= [];
    
    //foreach loop using random unique index values to obtain names for the  quiz options
    quizAnswers.forEach(answer => {
        //ensuring unique names in the options list using filter()
        tempAnswer = fnRandomizeNumber(0, objectArray.length - 1);
        while (tempAnswer == studentIndex) {tempAnswer = fnRandomizeNumber(0, objectArray.length - 1)}
        if  (tempAnswer != studentIndex) {
            answer.innerText = objectArray[tempAnswer].name;
            tempIndices = tempIndices.filter(tempIndex => (tempIndex !=tempAnswer && tempIndex != studentIndex));
        }
    })
    
    //replace one option with right answer
    let rndRightOption = quizAnswers[fnRandomizeNumber(1, 3)];
    rndRightOption.innerText = objectArray[studentIndex].name;
    rightOptionID = rndRightOption.htmlFor;  //note  radio button id for correct answer 
}
//remove a student from the working Array
let guessedStudents = [];
let removeStudent = function (objectArray, studentIndex) {
    guessedStudents.push(objectArray.splice(studentIndex, 1));
}

//function to move to next question
let getNewQuizSlide = function(){
    // tempStudentArray = fnPickTenStudents(tempStudentArrayFullCopy);
    quizForm.reset(); //reset form options
    document.getElementById("guessAnswerbtn").disabled = false; //enable Guess button
    thumbsDown.classList.add('hide'); //hide any alerts from previous round
    thumbsUp.classList.add('hide');
    currentStudentIndex = currentStudent(tempStudentArray, fnRandomizeNumber);
    nextClassfellow(tempStudentArray, currentStudentIndex);
}

//------GAME START--
currentStudentIndex = currentStudent(tempStudentArray, fnRandomizeNumber); //random student from array
nextClassfellow(tempStudentArray, currentStudentIndex); //displayed in HTML quiz slide 

//Event. click 'Find a classfellow' for new student slide quiz
newQuizSlide.addEventListener('click', e => {
    // console.log("after find classfellow button");
    newQuizSlide.scrollIntoView(true);
    getNewQuizSlide();
});


//Event. Click Guess! to check answer
let guessCounter = 0;
let getLabel = 0;
let FinalScore = 0;
let scoreNow = 0;
quizForm.addEventListener('submit', e => {
    e.preventDefault();
    guessCounter++; //increment number of attempts
    const userChoice = document.querySelector('input[name=question]:checked');
    if (userChoice.id == rightOptionID) {
        score++;  //increment score
        thumbsUp.classList.remove('hide'); //show thumbs up
        setTimeout(() => thumbsUp.classList.add('hide'), 3000);
        thumbsDown.classList.add('hide');
        scoreNow = Math.ceil(score / guessCounter * 100); //current score
        currentScore.getElementsByClassName('alert').innerText += ` ${scoreNow} %`;
    } else {
        thumbsDown.classList.remove('hide');
        setTimeout(() => thumbsDown.classList.add('hide'), 3000);
        thumbsUp.classList.add('hide');
    }
    //Add the 'check mark' to correct option
    getLabel = document.getElementById(rightOptionID).parentElement.querySelector('.quiz-option-label');
    const addCheck = `<span class="alert alert-success"><i class="fas fa-user-check"></i></span>`;
    getLabel.innerHTML += addCheck;
    removeStudent(tempStudentArray, currentStudentIndex); //remove each student after being shown once
    document.getElementById("guessAnswerbtn").disabled = true;// prevent further guesses until next slide    
    if (guessCounter<10) {
        setTimeout(getNewQuizSlide, 200);
    } else {
        fnShowScore();
        window.scrollTo(0,0);
        totalScore.classList.add('hide');
        quizGame.classList.add('hide');
        quizBox.classList.add('hide');
        quizResult.innerText += ` ${score}/${guessCounter} (${finalScore}%) !`;
        quizResult.classList.remove('hide');
        playAgain.classList.remove('hide');
    }
   
});

const fnShowScore = function(){
    totalScore.classList.toggle('hide');
    finalScore = Math.ceil(score / guessCounter * 100);
    totalScore.innerText = ` ${score}/${guessCounter} (${finalScore}%) correct!`;
}

//click 'score' to show current score
showScorebtn.addEventListener('click', e => {
    fnShowScore();
    setTimeout(() => totalScore.classList.add('hide'), 3000);
});

   //play again?
    playAgain.addEventListener('click', e => {
        window.location.reload();
});
//Swotsheet will show the class headshot lightbox gallery
const classPhotos = document.querySelector('.class-gallery');
classPhotos.addEventListener('click', e => {
    e.preventDefault();
    studentGallery.classList.toggle('hide');
});

//---------------------------
// PHOTO GALLERY, answers
document.querySelector('.photos').addEventListener('click', e => {
    e.preventDefault();
    if (e.target.tagName === "IMG") {
        lightboxImg.setAttribute('src', e.target.parentElement.href);
        lightboxCaption.innerText = e.target.parentElement.dataset.caption;
        lightboxWrapper.classList.add('show');
    }
});

lightboxWrapper.addEventListener('click', () => {
    lightboxWrapper.classList.remove('show');
    lightboxImg.setAttribute('src', '');
});

