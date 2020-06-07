const palette = ['first', 'second', 'third', 'fourth', 'fifth'];
const range = [];
setRange();
document.getElementById("generate-btn").addEventListener("click", commenceTheming);

function assignRandomColor() {
  const red = setColor();
  const green = setColor();
  const blue = setColor();
  return `rgb(${red}, ${green}, ${blue})`;
}

function commenceTheming() {
  for(let num of palette) {
    document.getElementById(num).style.backgroundColor = assignRandomColor();
  }
}

function setColor() {
  return range[Math.floor(Math.random() * range.length)];
}

function setRange() {
  for(let i=0; i<255; i++) {
    range.push(i);
  }
}