function attachEvents() {
    let messagesTextarea = document.getElementById('messages');
    let authorInput = document.querySelector('input[name="author"]');
    let contentInput = document.querySelector('input[name="content"]');
    let submitButton = document.getElementById('submit');
    let refreshButton = document.getElementById('refresh');
    let url = 'http://localhost:3030/jsonstore/messenger';

    submitButton.addEventListener('click', async () => {
        const author = authorInput.value;
        const content = contentInput.value;

        if (author && content) {
            await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ author, content })
            })

            authorInput.value = '';
            contentInput.value = '';
        } else {
            alert('Please enter both a name and a message');
        }
    });

    refreshButton.addEventListener('click', async () => {
        try {
            let response = await fetch(url);

            if (!response.ok) {
                throw new Error('Failed to fetch messages');
            }
            let data = await response.json();
            let messages = Object.values(data)
                .map(msg => `${msg.author}: ${msg.content}`)
                .join('\n');
            messagesTextarea.value = messages;


        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    });
};

attachEvents();