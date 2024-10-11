root = document.getElementById('root');

const func1 = () => {
  let number = 0;
  const func2 = () => {
    output = number;
    number += 1;
    return output;
  }
  return func2;
}

const function1 = func1();
const function2 = func1();

const createDiv = ([text, number]) => {
  const outputContainerDiv = document.createElement('div');
  outputContainerDiv.className = 'outputContainer';

  const textDiv = document.createElement('div');
  textDiv.className = 'outputText';
  textDiv.innerText = text;
  
  const numberDiv = document.createElement('div');
  numberDiv.className = 'outputNumber';
  numberDiv.innerText = number;

  outputContainerDiv.appendChild(textDiv);
  outputContainerDiv.appendChild(numberDiv);

  root.appendChild(outputContainerDiv);
}

const randomFunction = () => {
  if (Math.floor(Math.random() * 2)) {
    return ['1st function value: ', function1()];
  } else {
    return ['2nd function value: ', function2()];
  }
}

const repeat = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    createDiv(randomFunction());
  }
}

repeat(10);
