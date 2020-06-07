const miniPage = ['mini-container', 'mini-header', 'mini-content', 'mini-btn-secondary', 'mini-btn-primary'];
const palette = ['first', 'second', 'third', 'fourth', 'fifth'];
const paletteDisplay = ['one', 'two', 'three', 'four', 'five'];
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
  for(let i=0; i<5; i++) {
    const thisPalette = document.getElementById(palette[i]);
    const thisPaletteDisplay = document.getElementById(paletteDisplay[i]);
    thisPalette.style.backgroundColor = assignRandomColor();
    thisPaletteDisplay.innerHTML = thisPalette.style.backgroundColor;
  }
  concludeTheming();
}

function concludeTheming() {
  document.getElementById(miniPage[0]).style.backgroundColor = document.getElementById(palette[0]).style.backgroundColor;
  document.getElementById(miniPage[1]).style.color = document.getElementById(palette[1]).style.backgroundColor;
  document.getElementById(miniPage[2]).style.color = document.getElementById(palette[2]).style.backgroundColor;
  document.getElementById(miniPage[3]).style.borderColor = document.getElementById(palette[4]).style.backgroundColor;
  document.getElementById(miniPage[3]).style.color = document.getElementById(palette[3]).style.backgroundColor;
  document.getElementById(miniPage[4]).style.backgroundColor = document.getElementById(palette[4]).style.backgroundColor;
  document.getElementById(miniPage[4]).style.color = document.getElementById(palette[3]).style.backgroundColor;
}

function setColor() {
  return range[Math.floor(Math.random() * range.length)];
}

function setRange() {
  for(let i=0; i<255; i++) {
    range.push(i);
  }
}