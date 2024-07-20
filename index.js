

 fetch('https://luismoraes7.github.io/Testes/teamsPL.json')
   .then(response => response.json())
   .then(teams => {
    teams.map((team) => console.log(team.team.name))

})


