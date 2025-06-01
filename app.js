// Single responsibility: Fetch and display user data
document.addEventListener('DOMContentLoaded', () => {
	const button = document.getElementById('load-data-btn');
	const output = document.getElementById('data-output');

	debugger;

	button.addEventListener('click', async () => {
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/userss'
			);
			const data = await response.json();

			console.log('Loaded users:', users);

			output.innerHTML = `
          <p>Loaded ${data.length} users.</p>
        `;
		} catch (error) {
			console.error('Something went wrong:', error);
			output.innerHTML = `<p style="color: red;">Error loading data</p>`;
		}
	});
});
