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
// var url = `https://v3.football.api-sports.io/leagues?id=${leagueId}`;

// fetch(url, requestOptions)
//   .then(response => response.json())
//   .then(result => {
//     // Lidar com os dados da API aqui
//     const leagueData = result.response[0];
//     console.log(leagueData)
//     function LeagueData(data) {
//       const p = document.createElement('p');
//       p.textContent = `ID da Liga: ${data.league.id}, Nome da Liga: ${data.league.name}, `;
//       document.body.appendChild(p);
//     }
//     document.addEventListener('DOMContentLoaded', () => Evento(leagueData));
//     LeagueData(leagueData)
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



// obterDadosDoCep()
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Agora você pode usar data como um objeto JavaScript
    console.log(data.players);
  })
  .catch(error => {
    console.error('Erro ao obter ou converter JSON:', error);
  });
