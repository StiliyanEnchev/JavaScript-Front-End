async function extractStudents() {
    let students = await getAllStudents();
    let tableBody = document.querySelector('#results tbody');
    document.getElementById('form').addEventListener('submit', (event) => {
        event.preventDefault();
        onCreate();
    
    });

    tableBody.replaceChildren();

    for (let stud of students) {
        let firstName = stud.firstName;
        let lastName = stud.lastName;
        let facultyNumber = stud.facultyNumber;
        let grade = stud.grade;

        let tr = document.createElement('tr');

        let tdFirst = document.createElement('td');
        tdFirst.textContent = firstName;

        let tdLast = document.createElement('td');
        tdLast.textContent = lastName;

        let tdFaculty = document.createElement('td');
        tdFaculty.textContent = facultyNumber;

        let tdGrade = document.createElement('td');
        tdGrade.textContent = Number(grade).toFixed(2);

        tr.append(tdFirst, tdLast, tdFaculty, tdGrade);
        tableBody.appendChild(tr);
    }
}

async function getAllStudents() {
    let res = await fetch('http://localhost:3030/jsonstore/collections/students');

    if (!res.ok) {
        alert('Request error');
        throw new Error('Request error');
    }

    let data = await res.json();

    return Object.values(data)
}

async function onCreate() {
    let inputs = {
        firstName: document.querySelector('[name="firstName"]'),
        lastName: document.querySelector('[name="lastName"]'),
        facultyNumber: document.querySelector('[name="facultyNumber"]'),
        grade: document.querySelector('[name="grade"]'),
    }

    let student = {
        firstName: inputs.firstName.value,
        lastName: inputs.lastName.value, 
        facultyNumber: inputs.facultyNumber.value, 
        grade: Number(inputs.grade.value),  
    }

    if(!student.firstName || !student.lastName || !student.facultyNumber || !student.grade) {
        return;
    }

    
    await createStudent(student)
    await extractStudents();
}

async function createStudent(studentData) {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(studentData)
    };

    const response = await fetch('http://localhost:3030/jsonstore/collections/students', options);

    if (!response.ok) {
        alert('Failed to create student');
        throw new Error('Failed to create student');
    }

    return await response.json();
}

extractStudents();