
function create(input) {
   input.forEach(section => {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = section;
      p.style.display = "none";
      div.appendChild(p);

      document.getElementById('content').appendChild(div)
      div.addEventListener('click', function () {
         p.style.display = ""
      })
   })
}