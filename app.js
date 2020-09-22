var scores,roundScores,activePlayer;
function initial()
{
    scores=[0,0];
    roundScores=0;
    activePlayer=0;
    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.btn-roll').style.display='inline-block';
    document.querySelector('.btn-hold').style.display='inline-block';

}

initial();

document.querySelector('.btn-roll').addEventListener('click',function(){

    var dice;        
    dice=Math.floor(Math.random()*6)+1;
    
    var diceDom=document.querySelector('.dice');
    diceDom.style.display='block';
    diceDom.src='dice-'+dice+'.png';
    if(dice!==1)
        {
        
            roundScores+=dice;
            document.querySelector('#current-'+activePlayer).textContent=roundScores;
        }
    else
        {
            nextPlayer();
        }

    
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    
    scores[activePlayer]+=roundScores;
    var input=document.querySelector('.finalScore').value;
    console.log(input);
    if(input)
        {
            var winningScore=input;
        }
    else
        {
            var winingScore=100;
        }
    
    if(scores[activePlayer]>=winningScore)
        {
            document.querySelector('#name-'+activePlayer).textContent="WINNER !";
            document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.btn-roll').style.display='none';
            document.querySelector('.btn-hold').style.display='none';

        }
    else
        {
    
            document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
            nextPlayer();
        }
    
});
document.querySelector('.btn-new').addEventListener('click',function(){
    
    initial();
    
    
})

function nextPlayer()
{
    activePlayer=1-activePlayer;
    roundScores=0;
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
    
}