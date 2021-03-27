function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   let input = document.querySelector('#inputs>textarea');
   const bestRestP = document.querySelector('#bestRestaurant>p');
   const workersP = document.querySelector('#workers>p');

   function onClick() {
      const arr = JSON.parse(input.value)
      let restaurants = {};
      arr.forEach(line => {
         let [name, workersArr] = line.split(' - ');
         workersArr = workersArr.split(", ");
         let workers = [];


         workersArr.forEach (worker => {
            const workerTokens = worker.split(" ")
            const salary = Number(workerTokens[1])
            workers.push({
               name: workerTokens[0],
               salary,
            })
         })
         if (restaurants[name]) {
            workers = workers.concat(restaurants[name].workers);
         }
         workers.sort((a, b) => b.salary - a.salary)
          const bestSalary = workers[0].salary;
         const averageSalary = workers
            .reduce((sum, worker) => sum + worker.salary, 0) / workers.length

         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary
         }

      })

      let bestRestaurantSalary = 0;
      let best = undefined;

      for (const name in restaurants) {
         if (restaurants[name].averageSalary > bestRestaurantSalary) {
            best = {
               name,
               workers: restaurants[name].workers,
               bestSalary: restaurants[name].bestSalary,
               averageSalary: restaurants[name].averageSalary
            }
            bestRestaurantSalary = restaurants[name].averageSalary
         }
      }

      bestRestP.textContent = `Name: ${best.name} Average Salary: ${best.averageSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`

      let list = [];
      best.workers.forEach(worker => {
         list.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      })

      workersP.textContent = list.join(" ")
   }
}


/*

["PizzaHut - Peter 500, George 300, Mark 800",
"TheLake - Bob 1300, Joe 780, Jane 660"]

*/

// function solve() {

//    const textArea = document.querySelector('textarea');
//    const button = document.getElementById('btnSend');
//    const bestRestaurant = document.querySelector('#bestRestaurant p').textContent
//    const bestRWorkers = document.querySelector('#workers p').textContent;


//    button.addEventListener('click', onClick)



//    function onClick() {
//       let input = JSON.parse(textArea.value);
//       let restaurants = {};
//       input.forEach(line => {
//          let [name, workerTokens] = line.split(" - ");
//          let workers = [];

//          workerTokens = workerTokens.split(", ")
//          workerTokens.forEach(couple => {
//             let [worker, salary] = couple.split(" ")
//             salary = +salary;
//             workers.push({
//                name: worker,
//                salary
//             })
//          })
//          if (restaurants[name]) {
//             workers = workers.concat(restaurants[name].workers);
//          }
//          workers.sort((a, b) => b.salary - a.salary)
//          const bestSalary = workers[0].salary
//          const averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length

//       })



//    }

// }