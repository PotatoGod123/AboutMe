'use strict';

var userName =prompt('What is your name good fellow? :)');// this will keep track of the users name
//console.log('this is the users name '+userName);

var userScore= 0;// this is will keep of a score for the end of the question game
//console.log(userScore);

document.getElementById('userNameGoesHere').innerHTML = userName;

alert('You will now be asked a series of questions, four to be exact. Please answered with Yes/No or Y/N. Any other will count your response as wrong!');

var userQuestion1 = prompt('Is 2+2=4?');
//console.log('this is the users answer for question 1 '+ userQuestion1);
//So these if statements are the questions with the last if being a pop up telling the user their score
if(userQuestion1.toLocaleLowerCase() === 'yes'|| userQuestion1.toLocaleLowerCase()=== 'y') {
  alert('Correct!');
  userScore= userScore+1;
} else if(userQuestion1.toLocaleLowerCase()=== 'no'|| userQuestion1.toLocaleLowerCase()=== 'n') {
  alert('You answered wrong dummy!');
} else{
  alert('Please type a correct response');
}

//console.log(userScore);

//If you use an \ it will tell javascript you want use whatever character after, ex: \' will show the apostephre instead of ending a string

var userQuestion2 = prompt('Is 8x10=21?');
//console.log('this is the users answer for question 2 '+ userQuestion2);

if(userQuestion2.toLocaleLowerCase() === 'yes'|| userQuestion2.toLocaleLowerCase()=== 'y') {
  alert('You answered wrong dummy!');
} else if(userQuestion2.toLocaleLowerCase()=== 'no'|| userQuestion2.toLocaleLowerCase()=== 'n') {
  alert('Correct!');
  userScore= userScore+1;
} else{
  alert('Please type a correct response');
}

//console.log(userScore);

var userQuestion3 = prompt('Is 500/10=40?');
//console.log('this is the users answer for question 3 '+ userQuestion3);

if(userQuestion3.toLocaleLowerCase() === 'yes'|| userQuestion3.toLocaleLowerCase()=== 'y') {
  alert('You answered wrong dummy!');
} else if(userQuestion3.toLocaleLowerCase()=== 'no'|| userQuestion3.toLocaleLowerCase()=== 'n') {
  alert('Correct!');
  userScore= userScore+1;
} else{
  alert('Please type a correct response');
}

//console.log(userScore);

var userQuestion4 = prompt('Is 200x10-5+40/10=1994?');
//console.log('this is the users answer for question 4 '+ userQuestion4);
// this is the forth and final question for math games
if(userQuestion4.toLocaleLowerCase() === 'yes'|| userQuestion4.toLocaleLowerCase()=== 'y') {
  alert('Correct!');
  userScore= userScore+1;
} else if(userQuestion4.toLocaleLowerCase()=== 'no'|| userQuestion4.toLocaleLowerCase()=== 'n') {
  alert('You answered wrong dummy!');
} else{
  alert('Please type a correct response');
}


if (userScore === 0) {
  alert('Where you even trying? :( '+userScore+' out of 4');
} else if(userScore === 1){
  alert('Well you guess one right I suppose. '+userScore+' out of 4');
} else if(userScore === 2){
  alert('Only half right, good job i guess '+userScore+' out of 4');
} else if(userScore===3){
  alert('Wow 3 of them right! good job '+userScore+' out of 4');
}else if(userScore===4){
  alert('WOW you got all of them RIGHT! I AM SO PROUD! AMAZING! '+userScore+' out of 4' );
}

// this will ask user for a right input with limited amount of tries an
var userGuessNumber =prompt('Guess a number between 1-20, you\'ll have 4 chances with this being your first :)');
console.log(userGuessNumber);
var attemptTries;
//console.log(attemptTries);


for(attemptTries = 0;attemptTries<4;attemptTries++){
  if(attemptTries===3){
    userGuessNumber = prompt('Last chance! tip: it\'s between 9 and 12 hehe');
    if(userGuessNumber==='11'){
      alert('Wow you guessed it! Nice job!');
      userScore= userScore+1;
      break;
    }else{
      alert('You failed all guesses,it was 11. oh well');
      break;
    }
  }
  if(userGuessNumber === '11'){
    alert('Wow you guessed it. Nice job!');
    userScore= userScore+1;
    break;
  }else if(userGuessNumber<'11'){
    userGuessNumber= prompt('Wrong Answer! A bit low try, again! Guess a number between 1-20');
  } else if(userGuessNumber>'11'){
    userGuessNumber= prompt('Wrong answer! A bit high, try again.Guess a number between 1-20');
  }else{
    userGuessNumber=prompt('Hey please put a correct choice, a number between 1-20! this counts as wrong. Try again.Guess a number between 1-20');

  }


}

//console.log(userScore);
// this will ask user for an input trying to guess my name
var guessMyFullName = ['cristian','andres','robles'];
var userGuessName = prompt('Guess a part of my name! You can put in my first/middle/last name. You\'ll only have 6 Chances!');
// this shit won't work, when i put in the input into the promt it does not recognize the right answer
var guessRight = false;
//FINALLY FUCKING i forgot toLowerCase() is a method and needs a dam () too call it 
for(var i=1;i<7;i++){
  for(var j=0;j<4;j++){
    if(userGuessName.toLowerCase() === guessMyFullName[j]){
      alert('u did it ');
      i=7;
      guessRight= true;
      userScore=+1;
      break;
    }

  }
  if(guessRight===false){
    alert('Wrong');
    userGuessName =prompt('Try Again!');
  }
}

//console.log(userScore);
//this will shows the users final score from all past scripts
alert('Your final score is ' +userScore+' nice?');
