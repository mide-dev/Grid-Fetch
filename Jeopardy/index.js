/* 
    Jeopardy
    
    Write an async function 
        that uses fetch() to fetch 4 categories 
        from https://jservice.io/api/categories
        parameters: count, offset
        
    Display the categories
        in a simplified 4x5 Jeopardy Board 
        using CSS Grid
*/

async function getJeopardyData() {
  const response = await fetch("https://jservice.io/api/categories?count=4");
  const data = await response.json();

  return data;
}

function getCategories(data) {
  return `
   
        <div class= jeopardy-title>${data.title}</div>
        <div class="jeopardy-clue clue1"> $100</div>
        <div class='jeopardy-clue clue2'> $200</div>
        <div class='jeopardy-clue clue3'> $300</div>
        <div class='jeopardy-clue clue4'> $400</div>
       
`;
}

getJeopardyData().then((data) => {
  document.body.innerHTML = `
        <div class= container>
            ${data.map(getCategories).join("")}
            </div>
    `;

  //   data.map(i => );
  console.log(data);
});
