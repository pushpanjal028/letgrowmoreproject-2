
async function getUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const userGrid = document.getElementById('userGrid');
        userGrid.innerHTML = '';

        data.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');
            userCard.innerHTML = `
                        <h2>${user.name}</h2>
                        <p>Email: ${user.email}</p>
                        <p>Phone: ${user.phone}</p>
                    `;
            userGrid.appendChild(userCard);
        });
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}