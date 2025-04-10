window.addEventListener("load", solve);

function solve() {
  const emailInput = document.getElementById("email");
  const eventInput = document.getElementById("event");
  const locationInput = document.getElementById("location");
  const nextButton = document.getElementById("next-btn");
  const previewList = document.getElementById("preview-list");
  const eventList = document.getElementById("event-list");

  nextButton.addEventListener("click", function () {
    const email = emailInput.value;
    const event = eventInput.value;
    const location = locationInput.value;

    if (email === "" || event === "" || location === "") {
      return;
    }

    const li = document.createElement("li");
    li.classList.add("event-content");

    const article = document.createElement("article");

    const h4 = document.createElement("h4");
    h4.textContent = `Email: ${email}`;

    const p1 = document.createElement("p");
    p1.innerHTML = `<strong>Event:</strong><br>${event}`;

    const p2 = document.createElement("p");
    p2.innerHTML = `<strong>Location:</strong><br>${location}`;

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    li.appendChild(article);

    const editButton = createButton("Edit", "edit", editHandler);
    const applyButton = createButton("Apply", "apply", applyHandler);

    li.appendChild(editButton);
    li.appendChild(applyButton);

    previewList.appendChild(li);

    emailInput.value = "";
    eventInput.value = "";
    locationInput.value = "";
    nextButton.disabled = true;

    function editHandler() {
      emailInput.value = email;
      eventInput.value = event;
      locationInput.value = location;

      previewList.removeChild(li);
      nextButton.disabled = false;
    }

    function applyHandler() {
      li.removeChild(editButton);
      li.removeChild(applyButton);
      eventList.appendChild(li);
      nextButton.disabled = false;
    }
  });

  [emailInput, eventInput, locationInput].forEach(input => {
    input.addEventListener("input", function () {
      nextButton.disabled = !emailInput.value || !eventInput.value || !locationInput.value;
    });
  });

  function createButton(text, className, eventHandler) {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add("action-btn", className);
    button.addEventListener("click", eventHandler);
    return button;
  }
}
