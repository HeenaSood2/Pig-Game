var scores, roundScore,activePlayer, winScore;
var gamePlaying=true;

init();

document.querySelector('.btn-roll').addEventListener("click", function(){
	winScore=parseInt(document.getElementById('input').value);
if(gamePlaying){
//generating random number
var dice=Math.floor(Math.random()*6)+1;
//display the image 
var demo=document.querySelector('.dice');
demo.style.display='block';
demo.src='dice-' + dice + '.png';

//Update the round score If the rolled number was not 1
if(dice !==1)
{
	roundScore+=dice;
	document.getElementById('current-'+ activePlayer).textContent=roundScore;

}
else{
 //Next player
nextPlayer();

}
}

});

//hold Button code
document.querySelector('.btn-hold').addEventListener("click", function() {

if(gamePlaying){
//add score to globle score
scores[activePlayer] += roundScore;
//update UI
document.querySelector('#score-' +activePlayer).textContent=scores[activePlayer];
////check who won the game
if(scores[activePlayer] >=winScore)
{
	document.querySelector('#name-' +activePlayer).textContent='Winner !';
	document.querySelector('.dice').style.display='none';
	document.querySelector('.player-' +activePlayer +'-panel').classList.add('winner');
	document.querySelector('.player-' +activePlayer +'-panel').classList.add('active');
 gamePlaying=false;
}
else
{
	nextPlayer();
}
}
	});


document.querySelector('.btn-new').addEventListener("click",init);

//shifting of players
function nextPlayer() {
	roundScore=0;
 activePlayer === 0 ? activePlayer =1 : activePlayer =0;
document.getElementById('current-0').textContent= '0';
document.getElementById('current-1').textContent= '0';
document.querySelector('.player-0-panel').classList.toggle('active');
 document.querySelector('.player-1-panel').classList.toggle('active');
}


//Main function

function init()
{
	scores=[0,0];
roundScore=0;
activePlayer=1;
gamePlaying=true;
document.querySelector('.dice').style.display ='none';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('name-1').textContent='Player 2';
document.getElementById('name-0').textContent='Player 1';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');


}
