function getComputerChoice() {
    // Générer un nombre aléatoire entre 0 et 2
    const randomNumber = Math.floor(Math.random() * 3);
  
    // Utiliser le nombre aléatoire pour choisir pierre, papier ou ciseaux
    switch (randomNumber) {
      case 0:
        return "Rock";
      case 1:
        return "Paper";
      case 2:
        return "Scissors";
    }
  }
  
  // Exemple d'utilisation de la fonction
  const computerSelection = getComputerChoice();
  
  var playerresult =0;
  var computerresult=0;
  function playRound(playerSelection, computerSelection) {
    if(playerSelection=="Rock"&&computerSelection=="Paper")
    {
      computerresult++;
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection=="Rock"&&computerSelection=="Scissors")
    {
      playerresult++;
        return "Congratulations, you won! Rock beats Scissors";
    }
    else if(playerSelection=="Rock"&&computerSelection=="Rock")
    {
        return "Tie !!";
    }
    else if(playerSelection=="Paper"&&computerSelection=="Rock")
    {
      playerresult++;
        return "Congratulations, you won! Paper beats Rock";
    }
    else if(playerSelection=="Paper"&&computerSelection=="Scissors")
    {
      computerresult++;
        return "You Lose! Scissors beats Paper";
    }
    else if(playerSelection=="Paper"&&computerSelection=="Paper")
    {
        return "Tie !!";
    }
    else if(playerSelection=="Scissors"&&computerSelection=="Paper")
    {
      playerresult++;
        return "Congratulations, you won! Scissors beats Paper";
    }
    else if(playerSelection=="Scissors"&&computerSelection=="Rock")
    {
      computerresult++;
        return "You Lose!, Rock beats Scissors";
    }
    else if(playerSelection=="Scissors"&&computerSelection=="Scissors")
    {
        return "Tie !!";
    }
    else
    {
        return "Erreur !! Essaye again"
    }
  }
  const body = document.querySelector('body');
  body.style.cssText="background-color:#986453";
  
  const container = document.querySelector('#container');
  const content = document.createElement('div');
content.classList.add('content');
content.style.cssText = "background-color:black; color:white;";

const p = document.createElement('p');
p.style.cssText= "color:green;";

function resultatfinal(){
  if(playerresult==5 &&computerresult==5)
    {
      content.textContent=`Résultat : <Player> ${playerresult} - <Computer> ${computerresult}`;;
      computerresult=0;
      playerresult=0;
      p.textContent="Tie !!";
    }
    else if(playerresult==5 &&computerresult<5)
    {
      content.textContent=`Résultat : <Player> ${playerresult} - <Computer> ${computerresult}`;;
      computerresult=0;
      playerresult=0;
      p.textContent="Congratulations, you won !";
    }
    else if(playerresult<5 &&computerresult==5)
    {
      content.textContent=`Résultat : <Player> ${playerresult} - <Computer> ${computerresult}`;;
      computerresult=0;
      playerresult=0;
      p.textContent="You Lose !!";
    }
}

  const btn1 = document.querySelector('#Rock');
  btn1.style.cssText="background-color:red; padding:36px; padding-left:62px; color:white;";
btn1.addEventListener('click', () => {
  const playerSelection="Rock";

  content.textContent = playRound(playerSelection, computerSelection);
  container.appendChild(content);
  
  p.textContent = `Résultat : <Player> ${playerresult} - <Computer> ${computerresult}`;
  container.appendChild(p);
  resultatfinal();
});

const btn2 = document.querySelector('#Paper');
btn2.style.cssText="background-color:black; padding:36px; padding-left:62px; color:white;";
btn2.addEventListener('click', () => {
  const playerSelection="Paper";
  content.textContent = playRound(playerSelection, computerSelection);
  container.appendChild(content);
  
  p.textContent = `Résultat : <Player> ${playerresult} - <Computer> ${computerresult}`;
  container.appendChild(p);
  resultatfinal();
});

const btn3 = document.querySelector('#Scissors');
btn3.style.cssText="background-color:pink; padding:36px; padding-left:62px; color:white;";
btn3.addEventListener('click', () => {
  const playerSelection="Scissors";
  content.textContent = playRound(playerSelection, computerSelection);
  container.appendChild(content);
  
  p.textContent = `Résultat : <Player> ${playerresult} - <Computer> ${computerresult}`;
  container.appendChild(p);
  resultatfinal();
});

