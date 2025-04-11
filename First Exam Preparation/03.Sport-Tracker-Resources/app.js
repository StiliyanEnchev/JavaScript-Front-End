const workoutInput = document.querySelector("#workout");
const locationInput = document.querySelector("#location");
const dateInput = document.querySelector("#date");

const addWorkoutButton = document.querySelector("#add-workout");
const editWorkoutButton = document.querySelector("#edit-workout");
const loadWorkoutButton = document.querySelector("#load-workout");

const historySection = document.querySelector("#history");
const listContainer = document.querySelector("#list");

async function getAllWorkouts() {
    loadWorkoutButton.addEventListener('click', async () => {
        let allWorkouts = await getWorkouts();
        listContainer.replaceChildren();

        for (idKey in allWorkouts) {
            let name = allWorkouts[idKey].workout;
            let location = allWorkouts[idKey].location;
            let date = allWorkouts[idKey].date;
            let id = allWorkouts[idKey]._id;

            addToList(name, location, date, id);
        }

    })
}

function addToList(name, location, date, id) {
    const container = document.createElement('div');
    container.classList.add('container');
    container.setAttribute('data-id', id);

    container.innerHTML = `
      <h2>${name}</h2>
      <h3>${date}</h3>
      <h3 id="location">${location}</h3>
      <div id="buttons-container">
        <button class="change-btn">Change</button>
        <button class="delete-btn">Done</button>
      </div>
    `;

    listContainer.appendChild(container);
}

addWorkoutButton.addEventListener('click', async () => {
    if (!dateInput.value || !locationInput.value || !workoutInput.value) {
        return;
    }

    await onAdd(
        workoutInput.value,
        locationInput.value,
        dateInput.value
    )

    dateInput.value = '';
    locationInput.value = '';
    workoutInput.value = '';
    loadWorkoutButton.click();
});

async function getWorkouts() {
    let res = await fetch('http://localhost:3030/jsonstore/workout/');
    if (!res.ok) {
        alert('Request error');
        throw new Error('Request error');
    }
    let data = await res.json();
    return data;
}

async function onAdd(workout, location, date) {
    const newWorkout = {
        workout,
        location,
        date
    };

    try {
        const response = await fetch('http://localhost:3030/jsonstore/workout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newWorkout)
        });

        if (!response.ok) {
            throw new Error('Failed to add workout');
        }

        const data = await response.json();

    } catch (err) {
        console.error(err);
    }
}

listContainer.addEventListener('click', async function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const workoutElement = event.target.closest('.container');
        const workoutId = workoutElement.getAttribute('data-id');
        await deleteWorkout(workoutId);
        workoutElement.remove();
        loadWorkoutButton.click();
    }


});

async function deleteWorkout(id) {
    try {
        const response = await fetch(`http://localhost:3030/jsonstore/workout/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to delete workout');
        }
    } catch (err) {
        console.error('Error deleting workout:', err);
    }
}

listContainer.addEventListener('click', async function (event) {
    const workoutElement = event.target.closest('.container');
    if (!workoutElement) return;
    
    const workoutId = workoutElement.getAttribute('data-id');
    console.log('workoutId:', workoutId);
    
    if (event.target.classList.contains('delete-btn')) {
        console.log('Deleting workout with id:', workoutId);
        await deleteWorkout(workoutId);
        workoutElement.remove();
        loadWorkoutButton.click();
    }
    
    if (event.target.classList.contains('change-btn')) {
        let allWorkouts = await getWorkouts();
        console.log('allWorkouts:', allWorkouts);
        
        if (!allWorkouts || !allWorkouts[workoutId]) {
            console.error(`Workout with id ${workoutId} not found in allWorkouts`);
            return;  
        }
        
        let workoutData = allWorkouts[workoutId];
        workoutInput.value = workoutData.workout;
        locationInput.value = workoutData.location;
        dateInput.value = workoutData.date;
        
        currentEditId = workoutId;
        editWorkoutButton.disabled = false;
        addWorkoutButton.disabled = true;
    }
});



getAllWorkouts();
