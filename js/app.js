'use strict';

var userName =prompt('What is your name good fellow? :)');// this will keep track of the users name
console.log('this is the users name '+userName);

var userScore= 0;// this is will keep of a score for the end of the question game
console.log(userScore);

document.getElementById('userNameGoesHere').innerHTML = userName;

alert('You will now be asked a series of questions, four to be exact. Please answered with Yes/No or Y/N. Any other will count your response as wrong!');

var userQuestion1 = prompt('Is 2+2=4?');
console.log('this is the users answer for question 1 '+ userQuestion1);

if(userQuestion1.toLocaleLowerCase() === 'yes'|| userQuestion1.toLocaleLowerCase()=== 'y') {
  alert('Correct!');
  userScore= userScore+1;
} else if(userQuestion1.toLocaleLowerCase()=== 'no'|| userQuestion1.toLocaleLowerCase()=== 'n') {
  alert('You answered wrong dummy!');
} else{
  alert('Please type a correct response');
}

console.log(userScore);


var userQuestion2 = prompt('Is 8x10=21?');
console.log('this is the users answer for question 2 '+ userQuestion2);

if(userQuestion2.toLocaleLowerCase() === 'yes'|| userQuestion2.toLocaleLowerCase()=== 'y') {
  alert('You answered wrong dummy!');
} else if(userQuestion2.toLocaleLowerCase()=== 'no'|| userQuestion2.toLocaleLowerCase()=== 'n') {
  alert('Correct!');
  userScore= userScore+1;
} else{
  alert('Please type a correct response');
}

console.log(userScore);

var userQuestion3 = prompt('Is 500/10=40?');
console.log('this is the users answer for question 3 '+ userQuestion3);

if(userQuestion3.toLocaleLowerCase() === 'yes'|| userQuestion3.toLocaleLowerCase()=== 'y') {
  alert('You answered wrong dummy!');
} else if(userQuestion3.toLocaleLowerCase()=== 'no'|| userQuestion3.toLocaleLowerCase()=== 'n') {
  alert('Correct!');
  userScore= userScore+1;
} else{
  alert('Please type a correct response');
}

console.log(userScore);

var userQuestion4 = prompt('Is 200x10-5+40/10=1994?');
console.log('this is the users answer for question 4 '+ userQuestion4);

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




