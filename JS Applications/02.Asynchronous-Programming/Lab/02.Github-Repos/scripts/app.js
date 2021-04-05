// function loadRepos() {
// 	const username = document.getElementById('username').value;

// 	const url = `https://api.github.com/users/${username}/repos`;

// 	// const requestPromise = fetch(url);
// 	// requestPromise.then(handleResponse);

// 	// function handleResponse(response) {
// 	// 	const dataPromise = response.json()
// 	// 	dataPromise.then(handleData)
// 	// }

// 	// function handleData(data) {
// 	// console.log(data)
// 	// }

// 	//fetch(url).then(response => response.json().then(data => console.log(data)));

// 	//  ^^^ на един ред

// 	fetch(url)
// 		.then(response => {
// 			if (!response.ok) {
// 				throw Error('Not okay')
// 			}
// 			console.log(response);
// 			return response.json()

// 		})
// 		.then(data => {
// 			const ulElement = document.getElementById('repos');
// 			ulElement.innerHTML = '';
// 			data.forEach(r => {
// 				const liElement = document.createElement('li');
// 				liElement.textContent = r.full_name;
// 				ulElement.appendChild(liElement)
// 			})
// 		})
// 		.catch(error => {
// 			console.log('Promise rejected');
// 			console.log(error);
// 		})

// }



 


async function loadRepos() {
	const username = document.getElementById('username').value;

	const url = `https://api.github.com/users/${username}/repos`;

	try {
		const response = await fetch(url);
		//console.log(response);

		if (response.status == 404) {
			throw Error("user not found!");
		}

		const data = await response.json()

		console.log('Promise fulfilled');
		console.log(data);


		const ulElement = document.getElementById('repos');
		ulElement.innerHTML = '';
		data.forEach(r => {
			const liElement = document.createElement('li');
		//	liElement.textContent = r.full_name;
			let a = document.createElement('a');
			a.href = url;
			a.textContent = r.full_name

			liElement.appendChild(a)
			ulElement.appendChild(liElement)
		})
	} catch (error) {
		console.log('Promise rejected');
		console.log(error);
	}

}