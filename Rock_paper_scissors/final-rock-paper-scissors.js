let score=JSON.parse(localStorage.getItem('score')) || {wins:0,losses:0,ties:0};

    updateScoreElement();
/*
    if (!score){
      score={
        wins:0,
        losses:0,
        ties:0
      };
    }
*/


    function playGame(playerMove){
      const computerMove=pickComputerMove();
      let result='';  
      if (playerMove==='Rock'){
        if (computerMove==='Rock'){
          result='Tie';
        } else if (computerMove==='Paper'){
          result='Computer Wins';
        } else if (computerMove==='Scissors'){
          result='Player Wins';
        }
      }

      else if(playerMove==='Paper'){
        if (computerMove==='Rock'){
          result='Player Wins';
        } else if (computerMove==='Paper'){
          result='Tie';
        } else if (computerMove==='Scissors'){
          result='Computer Wins'; 
        }
      }

      else if(playerMove==='Scissors'){
        if (computerMove==='Rock'){
          result='Computer Wins';
        } else if (computerMove==='Paper'){
          result='Player Wins';
        } else if (computerMove==='Scissors'){
          result='Tie';
        }
      }
      if (result==='Player Wins'){
        score.wins++;
      } else if (result==='Computer Wins'){
        score.losses++;
      }
      else if(result==='Tie'){
        score.ties++;
      }

      localStorage.setItem('score',JSON.stringify(score));

      updateScoreElement();
      
      document.querySelector('.js-result').innerHTML = result;

      document.querySelector('.js-moves').innerHTML 
      = `You
      <img src="emojis/${playerMove}-emoji.png"
      class="move-icon"> 
      <img src="emojis/${computerMove}-emoji.png"
      class="move-icon">
      Computer`;
    }
    
    function updateScoreElement(){
      document.querySelector('.js-score').innerHTML = 
      `wins:${score.wins}  Losses:${score.losses} Ties:${score.ties}`;
    } 

    function  pickComputerMove(){
      const randomNumber=Math.random();
      let computerMove='';
      
      if (randomNumber<0.34 && randomNumber>=0){
        computerMove = 'Rock';
      } else if (randomNumber<0.67 && randomNumber>=0.34){
        computerMove ='Paper';
      } else {
        computerMove ='Scissors';
      } 
      return computerMove;
    }