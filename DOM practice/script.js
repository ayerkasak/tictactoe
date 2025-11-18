const form = document.getElementById("signupForm");
const container = document.getElementById("tableContainer");

let table;
let tableBody;

form.addEventListener("submit", function(event) {
    event.preventDefault();  // Stop form from refreshing page

    // Get values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Create table if not created
    if (!table) {
        table = document.createElement("table");

        const thead = document.createElement("thead");
        thead.innerHTML = `
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Gender</th>
            </tr>
        `;

        tableBody = document.createElement("tbody");

        table.appendChild(thead);
        table.appendChild(tableBody);
        container.appendChild(table);
    }

    // Create row for new data
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${password}</td>
        <td>${gender}</td>
    `;

    // Add row to table body
    tableBody.appendChild(row);

    // Clear the form
    form.reset();
});
