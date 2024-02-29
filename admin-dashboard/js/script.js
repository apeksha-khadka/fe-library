const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})


function addTodo(){
	// Fetching the input values
	const bookNameInput = document.querySelector('.js-name-input');
	const quantityInput = document.querySelector('.js-quantity-input');
	const dateInput = document.querySelector('.js-date-input');

	// Getting the values from the inputs
	const bookName = bookNameInput.value;
	const quantity = quantityInput.value;
	const date = dateInput.value;

	// Creating a new row for the table
	const newRow = document.createElement('tr');
	newRow.innerHTML = `
        <td>
            <img src="../../img/book2.jpg">
            <p>${bookName}</p>
        </td>
        <td>${date}</td>
        <td><span class="status completed">${quantity}</span></td>
        <td>
        <button onclick="deleteBook(this)" class="delete-button">Delete</button>
    </td>
    `;

	// Appending the new row to the table's tbody
	const tableBody = document.querySelector('#recentBooksTable tbody');
	tableBody.appendChild(newRow);

	const newBooksCountElement = document.querySelector('.box-info h3');
	let currentCount = parseInt(newBooksCountElement.textContent);
	currentCount++;
	newBooksCountElement.textContent = currentCount;

	// Clearing the input fields
	bookNameInput.value = '';
	quantityInput.value = '';
	dateInput.value = '';

	// Dismissing the modal
	$('#myModal').modal('hide');
}
//DELETE ROW
function deleteBook(button) {

	var row = button.closest('tr');

	// Get the count element
	var countElement = document.getElementById('bookCount');

	// Get the current count
	var currentCount = parseInt(countElement.innerText);

	// Decrement the count
	var newCount = currentCount - 1;

	// Update the count in the UI
	countElement.innerText = newCount;

	// Remove the row from the table
	row.remove();
}

//ADD STUDENT
function addStudent() {
	// Fetching the input values
	const studentNameInput = document.querySelector('.js-student-name-input');
	const bookNameInput = document.querySelector('.js-book-name-input');
	const dateInput = document.querySelector('.js-date-value-input');

	// Getting the values from the inputs
	const studentName = studentNameInput.value;
	const bookName = bookNameInput.value;
	const date = dateInput.value;

	// Creating a new row for the table
	const newRow = document.createElement('tr');
	newRow.innerHTML = `
        <td>
            <img src="../../img/admin.webp">
            <p>${studentName}</p>
        </td>
        <td>${bookName}</td>
        <td>${date}</td>
        <td>
            <button onclick="deleteStudent(this)" class="delete-button">Delete</button>
        </td>
    `;

	// Log the date value
	console.log(dateInput.value);


	// Appending the new row to the table's tbody
	const tableBody = document.querySelector('#recentStudentTable tbody');
	tableBody.appendChild(newRow);

	// Update the student count
	const newStudentsCountElement = document.querySelector('#studentCount');
	let currentStudentCount = parseInt(newStudentsCountElement.textContent);
	currentStudentCount++;
	newStudentsCountElement.textContent = currentStudentCount;

	// Clearing the input fields
	studentNameInput.value = '';
	bookNameInput.value = '';
	dateInput.value = '';

	// Dismissing the modal
	$('#my_Modal').modal('hide');


}


function deleteStudent(button) {
	var row = button.closest('tr');

	// Get the student count element
	var countElement = document.getElementById('studentCount');

	// Get the current count
	var currentCount = parseInt(countElement.innerText);

	// Decrement the count
	var newCount = currentCount - 1;

	// Update the count in the UI
	countElement.innerText = newCount;

	// Remove the row from the table
	row.remove();
}



