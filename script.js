let users = JSON.parse(localStorage.getItem('users')) || [];


function createUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;


    if (name && email) {
        users.push({ name, email });
        localStorage.setItem('users', JSON.stringify(users));
        fillTable();
        document.getElementById('create_form').reset();
    } else {

        alert('Fill the name and email');
    }
}

function deleteUser(index) {
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    fillTable();
}

function fillTable() {
    const dataTable = document.getElementById('table_content');
    table_content.innerHTML = '';


    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td><button onclick="deleteUser(${index})">Delete</button>
            </td>`;
        dataTable.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fillTable();
});