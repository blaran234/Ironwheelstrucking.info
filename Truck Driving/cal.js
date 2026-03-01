  const options={
    rock:document.querySelector('rock'),
    paper:document.querySelector('paper'),
    scissors:document.querySelector('scissors'),
    wins:document.querySelector('wins'),
    loss:document.querySelector('loss'),
    tiers:document.querySelector('tiers'),
    reset:document.querySelector('reset')
    winer:0,
    losse:0,
    tierse:0,

  }
  

  function playerMove(){
    let randomNo=Math.random();
    let playerPick='';
    if(randomNo>=0 && randomNo<1/3){
      playerPick='rock'}
      else if(randomNo>=1/3 && randomNo<2/3){
        playerPick='paper'
      }
      else if(randomNo>=2/3 && randomNo<1){
        playerPick='scissors'
      }
    return playerPick;
    
  }
  function playerstart(playerchoice){
  
    let result='';
    if(playerchoice=='rock'){
      if(playerPick=='rock'){
        result='you loss';
        console.log(result);

      }
      else if(playerPick=='paper'){
        result='just tiers'
        console.log(result);
      }
      else if(playerPick=='scissors'){
        result='you won';
        console.log(result)
      }

    }
    else if(playerchoice=='paper'){
      if(playerPick=='rock'){
        result='you won';
        console.log(result);

      }
      else if(playerPick=='paper'){
        result='you loss'
        console.log(result);
      }
      else if(playerPick=='scissors'){
        result='you tiers';
        console.log(result)
      }
    }
    else if(playerchoice=='scissors'){
      if(playerPick=='rock'){
        result='you tiers';
        console.log(result);

      }
      else if(playerPick=='paper'){
        result='you won'
        console.log(result);
      }
      else if(playerPick=='scissors'){
        result='you loss';
        console.log(result)
      }
    }
    if (result='just won'){
      options.winer++;

      
    }
    else if(result='you loss'){
      options.losse++;
    }
    else if(result='you tiers'){
      options.tierse++;
    }
    alert(you picked ${playerchoice} but the computer picked ${playerPick} , 
      hence you ${result}
      wins:${options.winer} , losses:${options.losse} , tiers:${options.tierse}

    )
  

  }
  options.reset.addEventListener('click' , ()=>{
    options.winer=0;
    options.losse=0;
    options.tierse=0;
    alert(wins:${options.winer} , losses:${options.losse} , tiers:${options.tierse})
  })
  options.rock.addEventListener('click' , ()=>{
    playerMove();
    playerstart();

    playerchoice('rock');
  })
  options.paper.addEventListener('click' , ()=>{
    playerMove();
    playerstart();

    playerchoice('paper')
  })
  options.scissors.addEventListener('click' , ()=>{
    playerMove();
    playerstart();

    playerchoice('scissors')
  })