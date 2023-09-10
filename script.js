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
  function Capitalize(player) {
    player=player.toLowerCase();
    player=player.charAt(0).toUpperCase()+player.slice(1);
    return player;
  }
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
 
 
 
  function game(){
    for(let i=0; i<5;i++)
    {
    const Player = prompt("CHOICE Rock , Paper or Scissors :");
    const playerSelection=Capitalize(Player);
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Résultat : <Player> ${playerresult} - <Computer> ${computerresult}`);
    }
    if(playerresult==computerresult)
    {
      alert("Tie !!");
    }
    else if(playerresult>computerresult)
    {
      alert("Congratulations, you won !");
    }
    else
    {
      alert("You Lose !!");
    }
  }
  game();