function solve() {
  let input = document.getElementById('input').value;
  let output = document.getElementById('output');
  splitted = input.split('.');
  result = '';
  finalString = '';

  if (splitted.length <= 2) {
    for (sentence of splitted) {
      if (sentence.length > 0) {

        result += `${sentence}.`;
      }
    }
  } else {
    for (let i = 0; i < splitted.length; i++) {

      if (splitted[i].length > 0) {

        result += `${splitted[i]}.`;
        if ((i + 1) % 3 == 0) {
          finalString += `<p>${result}</p>`;
          result = '';
        }
      }
    }
  }

  if (result.length > 0) {
    finalString += `<p>${result}</p>`;

  }
  output.innerHTML = finalString;

}








