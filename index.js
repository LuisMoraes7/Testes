// fetch API
////then catch
// fetch('https://viacep.com.br/ws/01001000/json/').then((response) => {
//     response.json().then((dados) => {
//         console.log(dados)
//     })
// }).catch((erro) => {
//     console.log(erro)
// })

// fetch('https://viacep.com.br/ws/01001000/json/').then((response) => {
//   response.json().then((dados) => {
//     console.log(dados)
//   }).catch((erro) => {
//     console.log('Deu erro: ', erro)
//   })
// })


// var myHeaders = new Headers();
// myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");
// myHeaders.append("x-rapidapi-key", "07cb960de19f3e90cb331a1d845dea6b");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// var leagueId = '39'; // Exemplo: Premier League
// var url = `https://v3.football.api-sports.io/teams?league=${leagueId}&season=2023`;

// fetch(url, requestOptions)
//   .then(response => response.json())
//   .then(result => {
//     const leagueData = result.response;
//     console.log(leagueData);

//     // Função para exibir dados da liga
//     function displayLeagueData(data) {
//       const p = document.createElement('p');
//       //p.textContent = `ID da Liga: ${data.league.id}, Nome da Liga: ${data.league.name}`;
//       p.textContent = JSON.stringify(data)
//       document.body.appendChild(p);
//     }

//     displayLeagueData(leagueData);
    
//   })
//   .catch(error => console.log('error', error));

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");
myHeaders.append("x-rapidapi-key", "07cb960de19f3e90cb331a1d845dea6b"); // Substitua pela sua chave da API

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

var leagueId = '39'; // ID da Premier League
var season = '2023'; // Temporada desejada
var urlTeams = `https://v3.football.api-sports.io/teams?league=${leagueId}&season=${season}`;

// Função para obter jogadores de um time
async function fetchPlayers(teamId) {
  var urlPlayers = `https://v3.football.api-sports.io/players?team=${teamId}&season=${season}`;

  try {
    const response = await fetch(urlPlayers, requestOptions);
    const result = await response.json();
    return result.response;
  } catch (error) {
    console.error('Erro ao obter jogadores:', error);
    return [];
  }
}

// Função principal para obter times e jogadores
async function fetchTeamsAndPlayers() {
  try {
    const response = await fetch(urlTeams, requestOptions);
    const result = await response.json();
    const teams = result.response;
    function displayLeagueData(data) {
      const p = document.createElement('p');
       p.textContent = JSON.stringify(data)
       document.body.appendChild(p);
      }

    for (const team of teams) {
      const teamInfo = team.team;
      
      displayLeagueData(teamInfo)
      console.log(`Nome do Time: ${teamInfo.name}, País: ${teamInfo.country}`);
      
      // Obter jogadores do time
      const players = await fetchPlayers(teamInfo.id);
      players.forEach(player => {
        console.log(`Nome do Jogador: ${player.player.name}, Posição: ${player.statistics[0].games.position}`);

        
          displayLeagueData(player)
      });
    }
  } catch (error) {
    console.error('Erro ao obter times:', error);
  }
}

// Chamar a função principal
fetchTeamsAndPlayers();
  

  //     // Supondo que a resposta seja um array com pelo menos um elemento


//     var teamsUrl = `https://v3.football.api-sports.io/teams?league=${leagueId}&season=2024`;
//     return fetch(teamsUrl, requestOptions);
//   })
//   .then(response => response.json())
//   .then(result => {
//     const teams = result.response;
//     //console.log(teams);

    
//     const teamId = teams[0].team.id
//     const team = teams[0];
//     console.log(team)
//     function TeamData(team) {
//       const p = document.createElement('p');
//       p.textContent = `Nome do time: ${team.team.name}, 
//       Abreviação: ${team.team.code}, 
//       País: ${team.team.country} 
//       Logo: ${team.team.logo}
//       Cidade: ${team.venue.city}
//       Estádio: ${team.venue.name}
//       Capacidade: ${team.venue.capacity}
//       Imagem do estádio: ${team.venue.image}
//       `;
//       document.body.appendChild(p);
//     }
//     TeamData(team)



//     var playersUrl = `https://v3.football.api-sports.io/players?team=${teamId}&season=2024`;
//     return fetch(playersUrl, requestOptions);
//   })
//   .then(response => response.json())
//   .then(result => {
//     const players = result.response;
//     console.log(players);
//     console.log(`Número de jogadores: ${players.length}`)
    
//     players.map((jogador) => {console.log(`${jogador.player.id}: ${jogador.player.name}`)
    
//     //if (jogador.statistics[0].games.position === "Attacker"){
//       //console.log('Atacante')
//     //}
    
//     console.log(`Posição: ${jogador.statistics[0].games.position}`)
//     console.log(jogador)
//   }
//   )

//   }).catch(error => console.log('error', error));


  // Obter times da liga
 

//async await





//  async function obterDadosDoCep(){
//     try{
//       const response = await fetch('https://viacep.com.br/ws/01001000/json/');
//     const dados = await response.json();
//     console.log(dados)
//     } catch (erro){
//         console.log(`Encontramos um erro: ${erro}`)
//     } finally {
//         console.log('Encontramos seu CEP.')
//     }

//  }



 obterDadosDoCep()
 fetch('https://luismoraes7.github.io/Testes/data.json')
   .then(response => response.json())
   .then(data => {
     const players = data.players
     console.log(data.competition)
     const numeroDeParticipantes = data.number_of_participating_clubs
     for (var c = 0 ; c <  numeroDeParticipantes ; c++){
       console.log(`Time ${data.participating_clubs[c]}; Code: ${data.teams_codes[c]} ;Estádio: ${data.stadiums[c]}`)
       console.log(`${data.clubs.manager[1]}`)
       console.log(`${data.players[c]}`)
     }

     const clubslength = data.clubs.length
     console.log(clubslength)

     const teamName = 'Arsenal'
     //const joca = data.players[0].club_code
     const jogadores = data.players
     jogadores.map((jogador) => {
       if (jogador.current_club === teamName){
        
         if (jogador.position === 'Goalkeeper'){
           console.log(`Goleiro: ${jogador.first_name} ${jogador.last_name}`)

         } else{
           console.log(`${jogador.position} ${jogador.first_name} ${jogador.last_name}`)
         }
       } else{
        
       }
     })


   })
   .catch(error => {
     console.error('Erro ao obter ou converter JSON:', error);
   });
