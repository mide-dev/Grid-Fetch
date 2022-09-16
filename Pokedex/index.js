/*
    Pokedex
    
    Write an async function 
        that uses fetch() to fetch all 
        Pokemon from pokemon.json
    
    Display all the Pokemon
        ID, English Name, 
        Type(s), 
        Stats: HP/Attack/Defense/Speed
*/

async function gameData() {
  const response = await fetch("./pokemon.json");
  const data = await response.json();

  return data;
}

const type = (data) => {
  if (data.type[1]) return `${data.type[0]} / ${data.type[1]}`;
  return `${data.type[0]}`;
};

function getHtml(data) {
  return `
    <div class="player-id">${data.id}</div>
    <div class="player-name">${data.name.english}</div>
    <div class="player-type">${type(data)}</div>
    <div class="player-stat">HP: ${data.base.HP}</div>
    <div class="player-stat">Attack: ${data.base.Attack}</div>
    <div class="player-stat">Defense: ${data.base.Defense}</div>
    <div class="player-stat">Speed: ${data.base.Speed}</div>
`;
}

gameData().then((data) => {
  document.body.innerHTML = `<div class="container">
  ${data.map(getHtml).join("")}
  </div>`;
});
