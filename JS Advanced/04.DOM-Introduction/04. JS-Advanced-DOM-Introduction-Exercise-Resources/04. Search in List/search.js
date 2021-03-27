function search() {
   let listItems = Array.from(document.querySelectorAll('#towns>li'));
   let input = document.querySelector('input').value;
   let foundMatches = 0;
  
   listItems.forEach(town => {
    
      if (town.textContent.includes(input) && input != "") {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         foundMatches++;
      }
   })
   let result = document.querySelector("#result");
   result.textContent = `${foundMatches} matches found`;
}

