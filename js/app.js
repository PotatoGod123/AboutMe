'use strict';

var userName =prompt('What is your name good fellow? :)');// this will keep track of the users name
//console.log('this is the users name '+userName);

var userScore= 0;// this is will keep of a score for the end of the question game
//console.log(userScore);

document.getElementById('userNameGoesHere').innerHTML = userName;

alert('You will now be asked a series of questions, four to be exact. Please answered with Yes/No or Y/N. Any other will count your response as wrong!');
// these next four functions will run a question block asking the user for a right answer
function questionprompt1(){

  var userQuestion1 = prompt('Is 2+2=4?');
  //console.log('this is the users answer for question 1 '+ userQuestion1);
  //So these if statements are the questions with the last if being a pop up telling the user their score
  if(userQuestion1.toLocaleLowerCase() === 'yes'|| userQuestion1.toLocaleLowerCase()=== 'y') {
    alert('Correct!');
    userScore++;
  } else if(userQuestion1.toLocaleLowerCase()=== 'no'|| userQuestion1.toLocaleLowerCase()=== 'n') {
    alert('You answered wrong dummy!');
  } else{
    alert('Please type a correct response');
  }
}

questionprompt1();

//console.log(userScore);

//If you use an \ it will tell javascript you want use whatever character after, ex: \' will show the apostephre instead of ending a string

function promptquestion2(){
  var userQuestion2 = prompt('Is 8x10=21?');
  //console.log('this is the users answer for question 2 '+ userQuestion2);

  if(userQuestion2.toLocaleLowerCase() === 'yes'|| userQuestion2.toLocaleLowerCase()=== 'y') {
    alert('You answered wrong dummy!');
  } else if(userQuestion2.toLocaleLowerCase()=== 'no'|| userQuestion2.toLocaleLowerCase()=== 'n') {
    alert('Correct!');
    userScore++;
  } else{
    alert('Please type a correct response');
  }
}

promptquestion2();
//console.log(userScore);

function promptquestion3(){
  var userQuestion3 = prompt('Is 500/10=40?');
  //console.log('this is the users answer for question 3 '+ userQuestion3);

  if(userQuestion3.toLocaleLowerCase() === 'yes'|| userQuestion3.toLocaleLowerCase()=== 'y') {
    alert('You answered wrong dummy!');
  } else if(userQuestion3.toLocaleLowerCase()=== 'no'|| userQuestion3.toLocaleLowerCase()=== 'n') {
    alert('Correct!');
    userScore++;
  } else{
    alert('Please type a correct response');
  }
}

promptquestion3();
//console.log(userScore);

function promptquestion4(){
  var userQuestion4 = prompt('Is 200x10-5+40/10=1994?');
  //console.log('this is the users answer for question 4 '+ userQuestion4);
  // this is the forth and final question for math games
  if(userQuestion4.toLocaleLowerCase() === 'yes'|| userQuestion4.toLocaleLowerCase()=== 'y') {
    alert('Correct!');
    userScore++;
  } else if(userQuestion4.toLocaleLowerCase()=== 'no'|| userQuestion4.toLocaleLowerCase()=== 'n') {
    alert('You answered wrong dummy!');
  } else{
    alert('Please type a correct response');
  }
}

promptquestion4();

//this function will get the userScore and send out the a message depending on their score
function getUserscore(actualScore){
  if (actualScore === 0) {
    alert('Where you even trying? :( '+actualScore+' out of 4');
  } else if(actualScore === 1){
    alert('Well you guess one right I suppose. '+actualScore+' out of 4');
  } else if(actualScore === 2){
    alert('Only half right, good job i guess '+actualScore+' out of 4');
  } else if(actualScore===3){
    alert('Wow 3 of them right! good job '+actualScore+' out of 4');
  }else if(actualScore===4){
    alert('WOW you got all of them RIGHT! I AM SO PROUD! AMAZING! '+actualScore+' out of 4' );
  }else if(actualScore===5){
    alert('Nice 5 right, congrats '+actualScore+' out of 5');
  }
}

// this will ask user for a right input with limited amount of tries an
// function  will run a question asking user to guess a number between 1-20
function fullGuessNumber(){
  var userGuessNumber =prompt('Guess a number between 1-20, you\'ll have 4 chances with this being your first :)');
  //console.log(userGuessNumber);
  var attemptTries;
  //console.log(attemptTries);
  // using parseInt() will turn whatever into a number or using Number()

  //console.log('is this a number? ', typeof userGuessedThisNumber);

  for(attemptTries = 0;attemptTries<4;attemptTries++){
    var userGuessedThisNumber = parseInt(userGuessNumber);
    if(attemptTries===3){
      userGuessNumber = prompt('Last chance! tip: it\'s between 9 and 12 hehe');
      userGuessedThisNumber= parseInt(userGuessNumber);
      if(userGuessedThisNumber=== 11){
        alert('Wow you guessed it! Nice job!');
        userScore++;
        break;
      }else{
        alert('You failed all guesses,it was 11. oh well');
        break;
      }
    }
    if(userGuessedThisNumber === 11){
      alert('Wow you guessed it. Nice job!');
      userScore;
      break;
    }else if(userGuessedThisNumber< 11){
      userGuessNumber= prompt('Wrong Answer! A bit low try, again! Guess a number between 1-20');
    } else if(userGuessedThisNumber> 11){
      userGuessNumber= prompt('Wrong answer! A bit high, try again.Guess a number between 1-20');
    }else{
      userGuessNumber=prompt('Hey please put a correct choice, a number between 1-20! this counts as wrong. Try again.Guess a number between 1-20');

    }


  }
}

fullGuessNumber();


//console.log(userScore);
// this will ask user for an input trying to guess my name
function guessMyNameQuestion(){
  var guessMyFullName = ['cristian','andres','robles'];
  var userGuessName = prompt('Guess a part of my name! You can put in my first/middle/last name. You\'ll only have 6 Chances!');
  // this shit won't work, when i put in the input into the promt it does not recognize the right answer
  var guessRight = false;
  //FINALLY Freaking i forgot toLowerCase() is a method and needs a dam () too call it

  // outer loop is tracking guesses
  for(var i=1;i<7;i++){
  // this loop will pull all the indexs from the arrays guessMyFullName and will compare to userGuessName
    for(var j=0;j<4;j++){
    //this is the statement comparing the input and the index from the array
      if(userGuessName.toLowerCase() === guessMyFullName[j]){
        alert('u did it ');
        i=7;// this will get you out of outer loop
        guessRight= true;
        userScore++;
        break;//take us out of inner foor loop
      }

    }
    // if stament always check if the stament is true, the ! tell what it is that it's not true
    if(!guessRight){
      alert('Wrong');
      userGuessName =prompt('Try Again!');
    }
  }
}

guessMyNameQuestion();
//console.log(userScore);
//this will shows the users final score from all past scripts


getUserscore(userScore);
