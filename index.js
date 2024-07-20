function inHTML(valor){
  const img = document.createElement('img')
  img.src = valor
  document.body.appendChild(img)

}


 fetch('https://luismoraes7.github.io/Testes/playersPL.json')
   .then(response => response.json())
   .then(players => {
    players.map((player) => {if (player.team === "Arsenal" && player.position === "Defender"){
      inHTML(player.image)

    } else{
      
    }}
  )
    

})


