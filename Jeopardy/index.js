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

getJeopardyData().then((data) => {
  console.log(data);
});
