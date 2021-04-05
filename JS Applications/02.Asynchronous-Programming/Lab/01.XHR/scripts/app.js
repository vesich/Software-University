async function loadRepos() {

   const url = "https://api.github.com/users/testnakov/repos";
   const response = await fetch(url);
   const data = await response.json();
   console.log(data);
   document.getElementById('res').textContent = JSON.stringify(data)
   
}