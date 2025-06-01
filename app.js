// Single responsibility: Fetch and display user data
document.addEventListener('DOMContentLoaded', () => {
	const button = document.getElementById('load-data-btn');
	const output = document.getElementById('data-output');

	button.addEventListener('click', async () => {
		try {
			debugger;
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/users'
			);
			const data = await response.json();

			console.log({ data });
			console.log({ cats: '123' });

			const users = data;

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
