document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const form = document.getElementById('task-input');
   const inputField = form.querySelector('input[type="text"]');
   let content = document.getElementById('content');

   form.addEventListener('submit', function(event) {
      event.preventDefault();
      const receivedText = inputField.value;
      sections = receivedText.split(', ')
      for (sec of sections) {
         const div = document.createElement('div');
         const p = document.createElement('p');
         p.textContent = sec;
         div.append(p);
         content.appendChild(div);
      }
   })
}