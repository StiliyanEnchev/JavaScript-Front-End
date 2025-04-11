window.addEventListener("load", solve);

function solve(){
    let saveButton = document.getElementById('save');
    let deleteButton = document.querySelector('.delete');
    
    saveButton.addEventListener('click', function() {
      let eventName = document.getElementById('event').value;
      let note = document.getElementById('note').value;
      let eventDate = document.getElementById('date').value;
    
      if (!eventName || !note || !eventDate) {
        return;
      }
    
      let eventItem = document.createElement('li');
      eventItem.classList.add('event-item');
    
      let eventContainer = document.createElement('div');
      eventContainer.classList.add('event-container');
    
      let article = document.createElement('article');
      article.innerHTML = `
        <p>Name: ${eventName}</p>
        <p>Note: ${note}</p>
        <p>Date: ${eventDate}</p>
      `;
      eventContainer.appendChild(article);
    
      let buttons = document.createElement('div');
      buttons.classList.add('buttons');
    
      let doneButton = document.createElement('button');
      doneButton.classList.add('btn', 'done');
      doneButton.textContent = 'Done';
    
      doneButton.addEventListener('click', function() {
        let endedEventsList = document.getElementById('events-list');
        endedEventsList.appendChild(eventItem);
        doneButton.remove();
        editButton.remove();
      });
    
      let editButton = document.createElement('button');
      editButton.classList.add('btn', 'edit');
      editButton.textContent = 'Edit';
    
      editButton.addEventListener('click', function() {
        document.getElementById('event').value = eventName;
        document.getElementById('note').value = note;
        document.getElementById('date').value = eventDate;
    
        eventItem.remove();
      });
    
      buttons.appendChild(editButton);
      buttons.appendChild(doneButton);
      eventContainer.appendChild(buttons);
    
      eventItem.appendChild(eventContainer);
      document.getElementById('upcoming-list').appendChild(eventItem);
    
      document.getElementById('event').value = '';
      document.getElementById('note').value = '';
      document.getElementById('date').value = '';
    });
    
    deleteButton.addEventListener('click', function() {
      let endedEventsList = document.getElementById('events-list');
      while (endedEventsList.firstChild) {
        endedEventsList.removeChild(endedEventsList.firstChild);
      }
    });
    
}

