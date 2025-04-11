window.addEventListener("load", solve);

function solve() {
  const laptopModelInput = document.querySelector('#laptop-model');
  const storageInput = document.querySelector('#storage');
  const priceInput = document.querySelector('#price');

  const addBtn = document.querySelector('#add-btn');
  const clearBtn = document.querySelector('.btn.clear');

  const checkList = document.querySelector('#check-list');
  const laptopsList = document.querySelector('#laptops-list');

  const formContainer = document.querySelector('#form-container');
  const laptopForm = document.querySelector('.laptop-info');

  addBtn.addEventListener('click', async (ev) => {
    ev.preventDefault();

    if (laptopModelInput.value != '', storageInput.value != '', priceInput.value != '') {
      let list = document.createElement('li');
      list.classList = 'laptop-item';
      let article = document.createElement('article');
      article.innerHTML = `
      <p>${laptopModelInput.value}</p>
      <p>$Memory: ${storageInput.value} TB</p>
      <p>$Price: ${priceInput.value}$</p>
      <button class="btn edit">edit</button>
      <button class="btn ok">ok</button>
      `
      list.appendChild(article)
      checkList.appendChild(list)
      storageInput.value = '';
      priceInput.value = '';
      laptopModelInput.value = '';

    }

    
  })
}
