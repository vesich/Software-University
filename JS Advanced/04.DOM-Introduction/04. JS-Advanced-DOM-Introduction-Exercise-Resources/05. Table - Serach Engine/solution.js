function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const rows = document.querySelectorAll('tbody tr')

   function onClick() {
      const input = document.querySelector('#searchField').value;

      for (let row of rows) {
         if (row.textContent.toLowerCase().includes(input.toLowerCase())) {
            row.classList.add("select")
         } else {
            row.removeAttribute('class');
         }
      }
   }
}