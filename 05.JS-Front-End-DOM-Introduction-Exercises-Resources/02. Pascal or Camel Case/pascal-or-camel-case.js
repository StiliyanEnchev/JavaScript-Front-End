function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result')

  function toLowerCamelCase(str) {
    let words = toCamelCase(str);
    return words[0].toLowerCase() + words.slice(1);
  }
  function toCamelCase(str) {
    return str.split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  }

  if (convention == 'Camel Case') {
    result.textContent += toLowerCamelCase(text)
  } else if (convention == 'Pascal Case') {
    result.textContent += toCamelCase(text)
  } else {
    result.textContent += 'Error!'
  }

}